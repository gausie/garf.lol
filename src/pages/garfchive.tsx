import Gallery from "@browniebroke/gatsby-image-gallery";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

interface ImageSharpEdge {
  node: {
    childImageSharp: {
      thumb: IGatsbyImageData;
      full: IGatsbyImageData;
    };
  };
}

type ImageSet = {
  edges: ImageSharpEdge[];
};

interface Props {
  data: {
    emoji: ImageSet;
    stickers: ImageSet;
  };
}

const extractImages = (images: ImageSet) =>
  images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: "Another image",
  }));

export default function Garfchive({ data }: Props) {
  const emoji = extractImages(data.emoji);
  const stickers = extractImages(data.stickers);

  return (
    <main style={{ margin: 40 }}>
      <div>
        <h2>Emoji</h2>
        <Gallery images={emoji} />
      </div>
      <div>
        <h2>Stickers</h2>
        <Gallery images={stickers} />
      </div>
    </main>
  );
}

export const pageQuery = graphql`
  query Garves {
    emoji: allFile(
      filter: { relativeDirectory: { eq: "emoji" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 32
              height: 32
              placeholder: BLURRED
              transformOptions: { fit: INSIDE }
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    stickers: allFile(
      filter: { relativeDirectory: { eq: "stickers" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 320
              height: 320
              placeholder: BLURRED
              transformOptions: { fit: INSIDE }
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
