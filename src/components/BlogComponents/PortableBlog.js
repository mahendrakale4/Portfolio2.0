import React from "react";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

const SampleImageComponent = ({ node }) => {
  const { value } = node;
  const { width, height } = getImageDimensions(value);
  const imageUrl = urlBuilder()
    .image(value)
    .width(800)
    .fit("max")
    .auto("format")
    .url();

  return (
    <img
      src={imageUrl}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: "block",
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Add other custom types if needed
  },
};

const PortableBlog = ({ portableTextContent }) => {
  return (
    <BlogBody>
      <PortableText content={portableTextContent} components={components} />
    </BlogBody>
  );
};

export default PortableBlog;
