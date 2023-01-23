import Gallery from "@browniebroke/gatsby-image-gallery";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import Caption from "../components/Caption";

type Edges<T> = { edges: T[] };

type Garves = {
  node: {
    html: string;
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
  set.edges.map(({ node: { html, frontmatter: garf } }) => ({
    ...garf.image.childImageSharp,
    title: garf.name,
    caption: <Caption author={garf.author} date={garf.date} html={html} />,
  }));

type ImageProp = React.ComponentProps<typeof Gallery>["images"][number];

export default function Garfchive({ data }: Props) {
  // @ts-ignore until PR 1140 is merged
  const emoji = extractImages(data.emoji) as ImageProp[];
  // @ts-ignore until PR 1140 is merged
  const stickers = extractImages(data.stickers) as ImageProp[];

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
      sort: { frontmatter: { date: ASC } }
    ) {
      edges {
        node {
          html
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
      sort: { frontmatter: { date: ASC } }
    ) {
      edges {
        node {
          html
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
