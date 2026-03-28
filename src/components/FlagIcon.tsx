'use client';

interface FlagIconProps {
  code: string;
  size?: number;
}

export default function FlagIcon({ code, size = 28 }: FlagIconProps) {
  const src = `https://flagcdn.com/w80/${code.toLowerCase()}.png`;

  return (
    <img
      src={src}
      alt={code}
      width={size}
      height={Math.round(size * 0.75)}
      style={{
        borderRadius: 3,
        objectFit: 'cover',
        display: 'block',
      }}
      loading="lazy"
    />
  );
}
