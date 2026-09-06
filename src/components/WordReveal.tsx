import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type WordRevealProps = {
  text: string;
  as?: ElementType | undefined;
  className?: string | undefined;
  delay?: number | undefined;
  stagger?: number | undefined;
  /** highlight words matched by index, rendered inside a wrapper */
  wrap?: (word: string, index: number) => ReactNode;
};

export function WordReveal({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 55,
  wrap,
}: WordRevealProps) {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag
      ref={ref as never}
      className={`${className ?? ""} ${inView ? "is-revealed" : ""}`}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <span
            className="word-rise"
            style={{ animationDelay: `${delay + i * stagger}ms` }}
          >
            {wrap ? wrap(word, i) : word}
          </span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </Tag>
  );
}
