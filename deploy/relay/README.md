# Public proxy relay

`proxy-public.llimonix.dev` serves the encrypted public proxy payload from
the upstream repository through the relay Nginx cache.

Install the cache definition under `/etc/nginx/conf.d/`, install the virtual
host under `/etc/nginx/sites-available/`, enable it in `sites-enabled`, and
issue the certificate with the existing Certbot webroot setup.

The browser fetches `/v1/public-proxies` at runtime. Public proxy changes do
not modify `index.html` and do not trigger a Vercel deployment.
