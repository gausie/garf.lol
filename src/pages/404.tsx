import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const pageStyle: React.CSSProperties = {
  backgroundColor: "#7dc3c1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const garf: React.CSSProperties = {
  width: "80%",
  maxWidth: 800,
  animation: "50s glitch infinite linear",
};

const immune: React.CSSProperties = {
  color: "white",
  textTransform: "uppercase",
};

export const Head: HeadFC = () => <title>garf not found</title>;

export default function NotFoundPage(props: PageProps) {
  return (
    <main style={pageStyle}>
      <a href="/" style={{ textAlign: "center" }}>
        <StaticImage
          style={garf}
          src="../images/propaganda.png"
          alt="you are not immune to 404 errors"
          placeholder="none"
        />
      </a>
    </main>
  );
}
