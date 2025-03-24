import React from "react";
import { BlogCard, BlogListContainer } from "./BlogStyles";
import { GatsbyImage } from "gatsby-plugin-image";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Link } from "gatsby";

const FeaturedBlogs = ({ data }) => {
  return (
    <BlogListContainer className="wrapper">
      <div className="lodu">
        <TwitterTweetEmbed tweetId={"1672156965693272066"} />
      </div>

      {data.map((blog) => {
        const {
          Title,
          publishedDate,
          slug,
          categories,
          excerpt,
          _id,
          coverImage,
        } = blog;
        const blogImage = coverImage.asset.gatsbyImage;
        //<p>{slug.current}</p>

        return (
          
          <Link to={`${slug.current}`} key={_id}>
            <BlogCard className="">
              <div className="card__left">
                <p className="category">{categories[0].title}</p>
                <h1>{Title}</h1>
                <p>{publishedDate}</p>
                <p className="excerpt">{excerpt[0]?.children[0]?.text}</p>
              </div>
              <GatsbyImage image={blogImage} alt="dfdf" className="coverImage" />
            </BlogCard>
          </Link>
        );
      })}
    </BlogListContainer>
  );
};

export default FeaturedBlogs;
