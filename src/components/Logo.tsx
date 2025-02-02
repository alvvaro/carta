import logoSvg from '@/static/logo.svg';

export default function Logo() {
  return (
    <div
      className="block bg-contain bg-left bg-no-repeat"
      style={{
        backgroundImage: `url(${logoSvg})`,
      }}
    />
  );
}
