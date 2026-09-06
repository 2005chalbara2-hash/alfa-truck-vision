import { createFileRoute } from "@tanstack/react-router";
import lamp from "@/assets/lamp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALFA TRUCK — LED Lighting & Electrical Parts for Trucks" },
      {
        name: "description",
        content:
          "ALFA TRUCK is a European distributor of LED lighting and electrical parts for trucks, trailers and special vehicles. Original, ECE-certified products with delivery across the EU.",
      },
      { property: "og:title", content: "ALFA TRUCK — LED Lighting for Trucks & Trailers" },
      {
        property: "og:description",
        content:
          "Official distributor of leading European lighting brands. Expert consultation, certified quality, delivery across Europe.",
      },
    ],
  }),
  component: Index,
});

const reasons = [
  {
    n: "01",
    title: "Original products",
    body: "Official distributor of leading European lighting brands — every part arrives with its factory pedigree intact.",
  },
  {
    n: "02",
    title: "Professional consultation",
    body: "We match the right lighting to your vehicle, from tractor units to purpose-built special machinery.",
  },
  {
    n: "03",
    title: "Quality and safety",
    body: "Certified products, fully compliant with the ECE standard — approved for road use across the continent.",
  },
  {
    n: "04",
    title: "Delivery across Europe",
    body: "We ship to every EU country, with the paperwork and lead times a fleet can plan around.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-ink-deep font-sans text-bone antialiased">
      <section className="relative isolate overflow-hidden">
        {/* hero visual, bleeding into the dark */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[52%] select-none">
          <img
            src={lamp}
            alt="Amber LED work lamp glowing in darkness"
            width={1280}
            height={1600}
            className="h-full w-full object-cover object-[38%_center] opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-ink-deep)_0%,color-mix(in_oklab,var(--color-ink-deep)_82%,transparent)_28%,transparent_62%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,var(--color-ink-deep),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,var(--color-ink-deep),transparent)]" />
        </div>

        <div className="relative mx-auto flex min-h-[56.25vw] max-w-[1600px] flex-col justify-center px-[6vw] py-[5vw]">
          <div className="flex items-center gap-5">
            <span className="h-px w-16 bg-brass-dim" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.42em] text-brass">
              Alfa Truck
            </span>
          </div>

          <h2 className="mt-8 max-w-[16ch] font-display text-[clamp(3.5rem,7.4vw,8.5rem)] leading-[0.92] tracking-[-0.02em] text-bone">
            Why <span className="italic text-brass">ALFA</span> TRUCK
          </h2>

          <p className="mt-8 max-w-[36ch] text-[0.95rem] leading-relaxed text-ash">
            Lighting and electrical components for trucks, trailers and special vehicles —
            supplied with the precision a working fleet depends on.
          </p>

          <ol className="mt-[4vw] grid max-w-[46%] grid-cols-2 gap-x-14 gap-y-[2.6vw]">
            {reasons.map((r) => (
              <li key={r.n} className="border-t border-hairline pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-brass-dim">{r.n}</span>
                  <h3 className="font-display text-[1.65rem] leading-tight tracking-[-0.01em] text-bone">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-3 pl-9 text-[0.82rem] leading-[1.7] text-ash">{r.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-[4vw] flex items-center gap-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 border-b border-brass-dim/60 pb-2 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-brass transition-colors hover:border-brass"
            >
              Speak with a specialist
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </a>
            <span className="text-[0.68rem] uppercase tracking-[0.28em] text-ash/70">
              ECE approved · EU-wide shipping
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
