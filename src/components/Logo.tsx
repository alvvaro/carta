import logoSvg from '@/static/logo.svg';

export default function Logo() {
  return (
    <div
      className="block h-6 bg-left bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${logoSvg})`,
      }}
    />
  );
}
