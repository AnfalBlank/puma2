import React from "react";

/**
 * Minimal markdown renderer: paragraphs, ## h2, ### h3, "- " lists.
 * Output is plain text — no HTML injection risk.
 */
export function Markdown({ source }: { source: string }) {
  const blocks = parse(source);
  return (
    <div className="space-y-5 text-zinc-300 text-base md:text-lg leading-relaxed">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mt-10 first:mt-0"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3
              key={i}
              className="text-lg md:text-xl font-black text-brand uppercase tracking-tight mt-6"
            >
              {b.text}
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {b.items.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 w-1.5 h-1.5 bg-brand shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-zinc-300 leading-relaxed">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

function parse(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2).trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    // Paragraph: collect until blank line
    const para: string[] = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i].trim())) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

function isBlockStart(line: string): boolean {
  return line.startsWith("## ") || line.startsWith("### ") || line.startsWith("- ");
}
