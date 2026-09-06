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

const detailTone = ["text-foreground/85", "text-foreground/55", "text-foreground/35", "text-foreground/22"];

function Index() {
  const list = useInView<HTMLOListElement>(0.2);
  const visual = useInView<HTMLElement>(0.15);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased">
      <section className="relative isolate flex min-h-[56.25vw] flex-col justify-center overflow-hidden px-[5vw] py-[4vw]">
        {/* ambient light, no frames */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-background">
          <div className="absolute left-1/2 top-[8%] h-[70%] w-[42%] -translate-x-1/2 rounded-full bg-brass/10 blur-[150px]" />
          <div className="absolute bottom-[-12%] left-1/2 h-[45%] w-[60%] -translate-x-1/2 rounded-full bg-brass/[0.05] blur-[160px]" />
        </div>

        {/* headline */}
        <header className="relative z-10 max-w-[70vw]">
          <WordReveal
            as="h2"
            text="Why ALFA TRUCK"
            stagger={110}
            className="font-serif text-[clamp(2.6rem,5.6vw,6rem)] font-semibold leading-[1.02] tracking-[-0.02em]"
            wrap={(word, i) =>
              i === 0 ? word : <span className="italic text-brass">{word}</span>
            }
          />
          <WordReveal
            as="p"
            text="Four reasons to work with us"
            delay={420}
            stagger={45}
            className="mt-3 font-sans text-[clamp(0.75rem,1vw,0.95rem)] uppercase tracking-[0.35em] text-foreground/35"
          />
        </header>

        <div className="relative z-10 mt-[3vw] grid grid-cols-12 items-start gap-x-8">
          {/* left — numbered index */}
          <ol
            ref={list.ref}
            className={`col-span-3 space-y-[1.8vw] self-center ${list.inView ? "is-revealed" : ""}`}
          >
            {reasons.map((r, i) => (
              <li
                key={r.n}
                className="word-rise flex items-center gap-4"
                style={{ animationDelay: `${300 + i * 130}ms`, display: "flex" }}
              >
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

          {/* centre — hero visual dissolving into black on every edge */}
          <figure
            ref={visual.ref as never}
            className="relative col-span-5 col-start-5 -mt-[4vw] flex justify-center"
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[34vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/12 blur-[110px]"
              aria-hidden
            />
            <img
              src={lamp}
              alt="Amber LED spotlight for trucks and special vehicles"
              width={1024}
              height={1216}
              className={`relative h-[32vw] w-full max-w-[26vw] object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${
                visual.inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{
                maskImage:
                  "radial-gradient(ellipse 62% 58% at 50% 48%, black 38%, rgba(0,0,0,0.55) 66%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 62% 58% at 50% 48%, black 38%, rgba(0,0,0,0.55) 66%, transparent 100%)",
              }}
            />
          </figure>

          {/* right — argument, fading down */}
          <div className="col-span-3 col-start-10 self-center">
            <WordReveal
              as="h3"
              text="Original products"
              delay={200}
              stagger={90}
              className="font-serif text-[clamp(1.3rem,2vw,2.1rem)] font-medium leading-tight"
            />
            <div className="mt-5 space-y-3 text-[0.92rem] leading-[1.5]">
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
