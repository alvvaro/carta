export default function DebugButton({ d }: { d: unknown }) {
  return (
    <button
      className="absolute top-1 left-1 rounded-md bg-white/30 px-1 text-black hover:bg-white/50 active:bg-white/70"
      onClick={(event) => {
        event.preventDefault();
        console.log(d);
      }}
    >
      🐞
    </button>
  );
}
