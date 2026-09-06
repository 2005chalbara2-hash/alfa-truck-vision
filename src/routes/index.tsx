import { createFileRoute } from "@tanstack/react-router";
import lamp from "@/assets/lamp.jpg";
import { WordReveal, useInView } from "@/components/WordReveal";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  "Official distributor of leading European lighting brands — every part arrives with its factory pedigree intact.",
  "We match the right lighting to your vehicle, from tractor units to purpose-built special machinery.",
  "Certified products, fully compliant with the ECE standard — approved for road use across the continent.",
  "Delivery across Europe: we ship to every EU country, with lead times a fleet can plan around.",
];

const detailTone: string[] = [
  "text-foreground/85",
  "text-foreground/55",
  "text-foreground/32",
  "text-foreground/20",
];

function Index() {
  const list = useInView<HTMLOListElement>(0.2);
  const visual = useInView<HTMLElement>(0.15);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased">
      <section className="relative isolate flex min-h-[56.25vw] flex-col overflow-hidden px-[4vw] py-[3.5vw]">
        {/* ambient light only — no frames, no panels */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-background">
          <div className="absolute left-1/2 top-[14%] h-[62%] w-[38%] -translate-x-1/2 rounded-full bg-brass/[0.09] blur-[150px]" />
          <div className="absolute bottom-[-10%] left-1/2 h-[40%] w-[62%] -translate-x-1/2 rounded-full bg-brass/[0.04] blur-[170px]" />
        </div>

        {/* headline — condensed uppercase, second line faded */}
        <header className="relative z-10 mt-[1vw] text-center">
          <WordReveal
            as="h2"
            text="WHY ALFA TRUCK?"
            stagger={100}
            className="font-display text-[clamp(3rem,7.6vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-foreground"
          />
          <WordReveal
            as="p"
            text="FOUR REASONS."
            delay={380}
            stagger={90}
            className="font-display text-[clamp(2.6rem,7vw,7.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em] text-foreground/[0.09]"
          />
        </header>

        <div className="relative z-10 -mt-[5vw] grid grid-cols-12 items-center gap-x-6">
          {/* left — numbered index with dotted leaders */}
          <ol
            ref={list.ref}
            className={`col-span-4 space-y-[2vw] ${list.inView ? "is-revealed" : ""}`}
          >
            {reasons.map((r, i) => (
              <li
                key={r.n}
                className="word-rise flex items-center gap-4"
                style={{ animationDelay: `${300 + i * 130}ms`, display: "flex" }}
              >
                <span
                  className={`font-display text-[1.7rem] font-medium leading-none ${
                    i === 0 ? "text-brass" : "text-foreground/18"
                  }`}
                >
                  {r.n}
                </span>
                <span
                  className={`h-[2px] flex-1 bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.6px)] bg-[length:11px_2px] bg-repeat-x ${
                    i === 0 ? "text-brass/55" : "text-foreground/12"
                  }`}
                />
                <span
                  className={`w-[13ch] shrink-0 text-[0.7rem] uppercase leading-[1.35] tracking-[0.18em] ${
                    i === 0 ? "text-foreground" : "text-foreground/28"
                  }`}
                >
                  {r.title}
                </span>
              </li>
            ))}
          </ol>

          {/* centre — hero visual melting into black */}
          <figure
            ref={visual.ref as never}
            className="relative col-span-4 flex justify-center"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[32vw] w-[28vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/[0.13] blur-[110px]"
              aria-hidden
            />
            <img
              src={lamp}
              alt="Amber LED spotlight for trucks and special vehicles"
              width={1024}
              height={1216}
              className={`relative h-[30vw] w-full max-w-[24vw] object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${
                visual.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{
                maskImage:
                  "radial-gradient(ellipse 60% 56% at 50% 48%, black 34%, rgba(0,0,0,0.5) 64%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 56% at 50% 48%, black 34%, rgba(0,0,0,0.5) 64%, transparent 100%)",
              }}
            />
          </figure>

          {/* right — argument, fading down */}
          <div className="col-span-4">
            <WordReveal
              as="h3"
              text="Original products"
              delay={200}
              stagger={90}
              className="font-sans text-[clamp(1.4rem,2.1vw,2.2rem)] font-medium leading-tight tracking-[-0.01em]"
            />
            <div className="mt-5 space-y-3 text-[0.92rem] leading-[1.55]">
              {detailText.map((line, idx) => (
                <WordReveal
                  as="p"
                  key={idx}
                  text={line}
                  delay={350 + idx * 220}
                  stagger={22}
                  className={detailTone[idx]}
                />
              ))}
            </div>
          </div>
        </div>

        <footer className="relative z-10 mt-auto flex items-center justify-between pt-6">
          <span className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/35">
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

