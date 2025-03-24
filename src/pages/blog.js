import { graphql } from "gatsby";
import React from "react";
import FeaturedBlogs from "../components/BlogComponents/FeaturedBlogs";

const Blog = ({ data }) => {
  const BlogData = data.allSanityBlog.nodes;
  return (
    <div className="wrapper">
      <FeaturedBlogs data={BlogData} />
    </div>
  );
};

export default Blog;
export const blogQuery = graphql`
  query MyQuery {
    allSanityBlog {
      nodes {
        Title
        publishedDate
        slug {
          current
        }
        categories {
          title
        }
        excerpt {
          children {
            text
          }
        }
        _id
        coverImage {
          asset {
            gatsbyImage(height: 200)
          }
        }
      }
    }
  }
`;