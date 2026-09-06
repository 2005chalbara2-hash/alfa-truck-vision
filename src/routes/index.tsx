import { createFileRoute } from "@tanstack/react-router";
import lamp from "@/assets/lamp-light.jpg";

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
  { n: "01", lines: ["ORIGINAL", "PRODUCTS"] },
  { n: "02", lines: ["PROFESSIONAL", "CONSULTATION"] },
  { n: "03", lines: ["QUALITY", "AND", "SAFETY"] },
  { n: "04", lines: ["DELIVERY", "ACROSS", "EUROPE"] },
];

function Index() {
  return (
    <main className="min-h-screen bg-fog font-sans text-graphite antialiased">
      <section className="relative isolate flex min-h-[56.25vw] flex-col justify-center overflow-hidden px-[4vw] py-[3.5vw]">
        {/* soft blurred backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-fog">
          <div className="absolute -left-[10%] top-[-15%] h-[70%] w-[55%] rounded-full bg-[color-mix(in_oklab,var(--color-bone)_85%,white)] blur-[120px]" />
          <div className="absolute right-[-8%] top-[10%] h-[80%] w-[50%] rounded-full bg-[color-mix(in_oklab,var(--color-haze)_70%,white)] blur-[130px]" />
          <div className="absolute bottom-[-20%] left-[25%] h-[60%] w-[55%] rounded-full bg-[color-mix(in_oklab,var(--color-haze)_55%,white)] blur-[140px]" />
        </div>

        {/* headline */}
        <header className="text-center">
          <h2 className="font-display text-[clamp(2.4rem,5.1vw,5.4rem)] font-extrabold uppercase leading-[0.98] tracking-[0.02em] text-graphite">
            WHY ALFA TRUCK?
          </h2>
          <p className="font-display text-[clamp(2.4rem,5.1vw,5.4rem)] font-extrabold uppercase leading-[0.98] tracking-[0.02em] text-graphite/12">
            FOUR REASONS.
          </p>
        </header>

        <div className="relative mt-[1.5vw] grid grid-cols-12 items-center gap-x-8">
          {/* left — numbered index with dotted leaders */}
          <ol className="col-span-4 space-y-[1.6vw]">
            {reasons.map((r, i) => (
              <li key={r.n} className="flex items-center gap-4">
                <span
                  className={`w-[2.4rem] font-display text-[1.9rem] font-medium leading-none ${
                    i === 0 ? "text-graphite" : "text-graphite/25"
                  }`}
                >
                  {r.n}
                </span>
                <span
                  className={`h-[3px] flex-1 bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.6px)] bg-[length:12px_3px] bg-repeat-x ${
                    i === 0 ? "text-graphite/70" : "text-graphite/20"
                  }`}
                />
                <span
                  className={`w-[13ch] shrink-0 text-[0.7rem] uppercase leading-[1.25] tracking-[0.16em] ${
                    i === 0 ? "text-graphite" : "text-graphite/30"
                  }`}
                >
                  {r.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ol>

          {/* centre — single hero visual */}
          <figure className="col-span-4 -mt-[2vw]">
            <img
              src={lamp}
              alt="LED spotlight for trucks and special vehicles"
              width={1024}
              height={1216}
              className="mx-auto h-[30vw] w-full max-w-[24vw] object-cover shadow-[0_40px_80px_-40px_rgba(30,28,26,0.45)]"
            />
          </figure>

          {/* right — the argument, fading out */}
          <div className="col-span-4 self-center pr-[2vw]">
            <h3 className="font-display text-[clamp(1.4rem,2.1vw,2.2rem)] font-medium leading-tight text-graphite">
              Original products
            </h3>
            <div className="mt-4 space-y-3 text-[0.95rem] leading-[1.45]">
              <p className="text-graphite">
                <span className="font-semibold">Official distributor</span> of leading European
                lighting brands — every part arrives with its factory pedigree intact.
              </p>
              <p className="text-graphite/55">
                We match the right lighting to your vehicle, from tractor units to purpose-built
                special machinery.
              </p>
              <p className="text-graphite/30">
                Certified products, fully compliant with the ECE standard — approved for road use
                across the continent.
              </p>
              <p className="text-graphite/15">
                Delivery across Europe: we ship to every EU country, with lead times a fleet can
                plan around.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-[2vw] flex items-center justify-between">
          <span className="text-[0.68rem] uppercase tracking-[0.3em] text-graphite/40">
            ALFA TRUCK · LIGHTING &amp; ELECTRICS
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border-b border-graphite/30 pb-1 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-graphite transition-colors hover:border-graphite"
          >
            SPEAK WITH A SPECIALIST
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &#8594;
            </span>
          </a>
        </footer>
      </section>
    </main>
  );
}

