import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Dancing from "../components/Dancing";
import bliss from "../images/garfbliss.png";

export const Head: HeadFC = () => <title>garf.lol</title>;

export default function IndexPage(props: PageProps) {
  return (
    <main>
      <div style={{ textAlign: "center", paddingTop: 20 }}>
        <p>Welcome to</p>
        <Dancing letters="garf.lol" width={100} />
      </div>
      <div style={{ textAlign: "center", paddingTop: 80 }}>
        <img src={bliss} />
      </div>
    </main>
  );
}
