import { readFile, writeFile } from 'node:fs/promises';
import { createHash, webcrypto } from 'node:crypto';

const sourceUrl = 'https://raw.githubusercontent.com/nellimonix/mtproxy_list/refs/heads/main/mtproxy.json';
const indexPath = new URL('../index.html', import.meta.url);
const declarationPrefix = 'const PUB_DATA=';

const response = await fetch(sourceUrl, { signal: AbortSignal.timeout(30_000) });
if (!response.ok) {
  throw new Error(`Proxy source returned HTTP ${response.status}`);
}

const data = await response.json();
if (
  data?.v !== 1 ||
  data?.alg !== 'A256GCM' ||
  typeof data.iv !== 'string' ||
  typeof data.ct !== 'string' ||
  !isBase64(data.iv) ||
  !isBase64(data.ct)
) {
  throw new Error('Proxy source has an invalid encrypted payload');
}

const keySeed = Uint8Array.from([0x6d, 0x74, 0x39, 0x31, 0x7a, 0x78, 0x71]);
const maskedKeySource = [78, 116, 96, 107, 87, 98, 106, 70, 128, 93, 70, 119, 60, 101, 122, 67, 139, 119, 123, 85, 125, 67, 100, 137, 121, 72, 114, 69, 117, 87, 84, 115, 86, 120, 129, 116, 86, 117, 65, 136, 88, 117, 87, 85];
const maskedKey = Buffer.from(
  maskedKeySource.toReversed().map(value => String.fromCharCode(value - 0x11)).join(''),
  'base64'
);
const keyMask = createHash('sha256').update(keySeed).digest();
const rawKey = Uint8Array.from(maskedKey, (value, index) => value ^ keyMask[index]);
const key = await webcrypto.subtle.importKey('raw', rawKey, { name: 'AES-GCM' }, false, ['decrypt']);
const plaintext = await webcrypto.subtle.decrypt(
  { name: 'AES-GCM', iv: Buffer.from(data.iv, 'base64') },
  key,
  Buffer.from(data.ct, 'base64')
);
const proxies = JSON.parse(new TextDecoder().decode(plaintext));
if (
  !Array.isArray(proxies) ||
  !proxies.every(proxy =>
    typeof proxy?.country === 'string' &&
    typeof proxy?.host === 'string' &&
    Number.isInteger(proxy?.port) &&
    typeof proxy?.secret === 'string'
  )
) {
  throw new Error('Decrypted proxy list has an invalid format');
}

const index = await readFile(indexPath, 'utf8');
const start = index.indexOf(declarationPrefix);
const end = index.indexOf(';', start + declarationPrefix.length);
if (start === -1 || end === -1) {
  throw new Error('PUB_DATA declaration was not found in index.html');
}

const generated = `${declarationPrefix}${JSON.stringify(data)}`;
const updated = index.slice(0, start) + generated + index.slice(end);
if (updated !== index) {
  await writeFile(indexPath, updated, 'utf8');
  console.log(`Embedded ${proxies.length} public proxies`);
} else {
  console.log(`Public proxy data is current (${proxies.length} proxies)`);
}

function isBase64(value) {
  if (!value || value.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(value)) {
    return false;
  }

  return Buffer.from(value, 'base64').toString('base64') === value;
}
