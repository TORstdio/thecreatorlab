import { Star } from "@/components/icons";

const items = [
  "STOP ACTING LIKE A CREATOR",
  "START THINKING LIKE ONE",
  "CREATOR BOOTCAMP",
];

function Run({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex items-center gap-9 pr-9 text-ink"
    >
      {items.map((item) => (
        <span key={item} className="flex items-center gap-9 whitespace-nowrap">
          <span className="font-display text-lg uppercase">{item}</span>
          <Star />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      data-cursor="purple"
      className="marquee bg-butter border-y-2 border-ink py-3.5 overflow-hidden"
    >
      <div className="marquee-track">
        <Run />
        <Run hidden />
      </div>
    </div>
  );
}
