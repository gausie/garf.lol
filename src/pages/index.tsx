import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Dancing from "../components/Dancing";
// @ts-ignore
import bliss from "../images/garfbliss.png";

export const Head: HeadFC = () => <title>garf.lol</title>;

export default function IndexPage(props: PageProps) {
  return (
    <main>
      <section style={{ textAlign: "center", paddingTop: 20 }}>
        <p>Welcome to</p>
        <h1>
          <Dancing letters="garf.lol" height={90} />
        </h1>
      </section>
      <section style={{ textAlign: "center", paddingTop: 80 }}>
        <a href="/garfchive">
          <img src={bliss} />
          <p>[ Enter ]</p>
        </a>
      </section>
    </main>
  );
}
