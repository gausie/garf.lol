import Gallery from "@browniebroke/gatsby-image-gallery";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

type Edges<T> = { edges: T[] };

type Garves = {
  node: {
    frontmatter: {
      name: string;
      author: string;
      date: string;
      image: {
        childImageSharp: {
          thumb: IGatsbyImageData;
          full: IGatsbyImageData;
        };
      };
    };
  };
};

type Props = {
  data: {
    emoji: Edges<Garves>;
    stickers: Edges<Garves>;
  };
};

const extractImages = (set: Edges<Garves>) =>
  set.edges.map(({ node: { frontmatter: garf } }) => ({
    ...garf.image.childImageSharp,
    title: garf.name,
    caption: `By ${garf.author} (${garf.date})`,
  }));

export default function Garfchive({ data }: Props) {
  const emoji = extractImages(data.emoji);
  const stickers = extractImages(data.stickers);

  return (
    <main style={{ margin: 40 }}>
      <div>
        <h2>Emoji</h2>
        <Gallery colWidth={100 / 6} mdColWidth={100 / 12} images={emoji} />
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
    emoji: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/emoji/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            author
            date(formatString: "dddd, Do MMMM YYYY")
            image {
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
      }
    }
    stickers: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/stickers/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            author
            date(formatString: "dddd, Do MMMM YYYY")
            image {
              childImageSharp {
                thumb: gatsbyImageData(
                  width: 160
                  height: 160
                  placeholder: BLURRED
                  transformOptions: { fit: INSIDE }
                )
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
