import { graphql } from "gatsby";
import React from "react";
import { PortableText } from "@portabletext/react";
import styled from "styled-components";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImage } from "sanity-image";

const BlogBody = styled.div`
  font-family: "Fira Code", monospace;
`;

const CustomImageComponent = ({ value, isInline }) => {
  const url = urlBuilder()
    .image(value)
    .width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();
  const alt = value.alt || " ";
  console.log(value.asset._ref);

  return (
    <SanityImage
      // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
      id={value.asset._ref}
      baseUrl="https://cdn.sanity.io/images/lyairl50/production/"
      alt="Demo image"
    />
  );
};

const myPortableTextComponents = {
  types: {
    CustomImage: CustomImageComponent,
    // Add more custom types if needed
  },
};

const BlogTemplate = ({ data }) => {
  const { _rawContent } = data.sanityBlog;

  return (
    <BlogBody>
      <div>
        <PortableText
          value={_rawContent}
          components={myPortableTextComponents}
        />
      </div>
    </BlogBody>
  );
};

export default BlogTemplate;

export const query = graphql`
  query ($id: String!) {
    sanityBlog(_id: { eq: $id }) {
      Title
      publishedDate
      _rawContent
    }
  }
`;
