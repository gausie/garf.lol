import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const pageStyle: React.CSSProperties = {
  backgroundColor: "#ff5c00",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const garf: React.CSSProperties = {
  maxWidth: 100,
};

const immune: React.CSSProperties = {
  color: "white",
  textTransform: "uppercase",
};

export const Head: HeadFC = () => <title>garf not found</title>;

export default function NotFoundPage(props: PageProps) {
  return (
    <main style={pageStyle}>
      <a href="/">
        <StaticImage
          style={garf}
          src="../images/garfthumb.png"
          alt="it's garfy"
        />
      </a>
      <p style={immune}>you are not immune to 404 errors</p>
    </main>
  );
}
