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
  { n: "01", title: "Original products" },
  { n: "02", title: "Professional consultation" },
  { n: "03", title: "Quality and safety" },
  { n: "04", title: "Delivery across Europe" },
];

const detailText = [
  { strong: "Official distributor", rest: " of leading European lighting brands — every part arrives with its factory pedigree intact.", opacity: "text-foreground" },
  { strong: "", rest: "We match the right lighting to your vehicle, from tractor units to purpose-built special machinery.", opacity: "text-foreground/55" },
  { strong: "", rest: "Certified products, fully compliant with the ECE standard — approved for road use across the continent.", opacity: "text-foreground/35" },
  { strong: "", rest: "Delivery across Europe: we ship to every EU country, with lead times a fleet can plan around.", opacity: "text-foreground/20" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased">
      <section className="relative isolate flex min-h-[56.25vw] flex-col justify-center overflow-hidden px-[5vw] py-[4vw]">
        {/* ambient brass glow behind the lamp */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-background">
          <div className="absolute right-[-5%] top-[-10%] h-[85%] w-[55%] rounded-full bg-brass/8 blur-[140px]" />
          <div className="absolute bottom-[-15%] left-[20%] h-[55%] w-[45%] rounded-full bg-brass/5 blur-[120px]" />
          <div className="absolute left-[-10%] top-[30%] h-[45%] w-[35%] rounded-full bg-ink/60 blur-[100px]" />
        </div>

        {/* headline */}
        <header className="relative z-10 max-w-[70vw]">
          <h2 className="font-serif text-[clamp(2.6rem,5.4vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-foreground">
            Why <span className="italic text-brass">ALFA TRUCK</span>
          </h2>
          <p className="mt-2 font-sans text-[clamp(0.75rem,1vw,0.95rem)] uppercase tracking-[0.35em] text-foreground/35">
            Four reasons to work with us
          </p>
        </header>

        <div className="relative z-10 mt-[3vw] grid grid-cols-12 items-start gap-x-8">
          {/* left — numbered index */}
          <ol className="col-span-3 space-y-[1.8vw] self-center">
            {reasons.map((r, i) => (
              <li key={r.n} className="flex items-center gap-4">
                <span
                  className={`font-display text-[1.6rem] font-medium leading-none ${
                    i === 0 ? "text-brass" : "text-foreground/25"
                  }`}
                >
                  {r.n}
                </span>
                <span
                  className={`h-[2px] flex-1 bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.6px)] bg-[length:10px_2px] bg-repeat-x ${
                    i === 0 ? "text-brass/60" : "text-foreground/15"
                  }`}
                />
                <span
                  className={`w-[14ch] shrink-0 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.16em] ${
                    i === 0 ? "text-foreground" : "text-foreground/30"
                  }`}
                >
                  {r.title}
                </span>
              </li>
            ))}
          </ol>

          {/* centre/right — hero visual bleeding into darkness */}
          <figure className="col-span-5 col-start-5 -mt-[4vw]">
            <img
              src={lamp}
              alt="Amber LED spotlight for trucks and special vehicles"
              width={1024}
              height={1216}
              className="mx-auto h-[32vw] w-full max-w-[26vw] object-cover"
              style={{
                maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              }}
            />
          </figure>

          {/* right — argument, fading out */}
          <div className="col-span-3 col-start-10 self-center">
            <h3 className="font-serif text-[clamp(1.3rem,2vw,2.1rem)] font-medium leading-tight text-foreground">
              Original products
            </h3>
            <div className="mt-5 space-y-3 text-[0.92rem] leading-[1.5]">
              {detailText.map((line, idx) => (
                <p key={idx} className={line.opacity}>
                  {line.strong && <span className="font-semibold">{line.strong}</span>}
                  {line.rest}
                </p>
              ))}
            </div>
          </div>
        </div>

        <footer className="relative z-10 mt-auto flex items-center justify-between border-t border-foreground/10 pt-5">
          <span className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/40">
            Alfa Truck · Lighting &amp; electrics
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border-b border-brass/40 pb-1 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass transition-colors hover:border-brass"
          >
            Speak with a specialist
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &#8594;
            </span>
          </a>
        </footer>
      </section>
    </main>
  );
}
