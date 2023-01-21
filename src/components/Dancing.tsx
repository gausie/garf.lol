import * as React from "react";

type Props = {
  letters: string;
  width?: number;
};

function mapToImage(letter: string) {
  switch (letter) {
    case "?":
      return "quest";
    case "!":
      return "exclam";
    case ".":
      return "period";
    default: {
      const code = letter.toLowerCase().charCodeAt(0);
      if (code < 97 || code > 122) return null;
      return letter.toLowerCase();
    }
  }
}

function notNull<T>(value: T | null): value is T {
  return value !== null;
}

export default function Dancing({ letters, width }: Props) {
  const children = letters
    .split("")
    .map(mapToImage)
    .filter(notNull)
    .map((image) => <img src={`/letters/${image}.gif`} width={width} />);
  return <>{children}</>;
}
