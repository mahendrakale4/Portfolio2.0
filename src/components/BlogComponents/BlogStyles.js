import styled from "styled-components";
import BlogBackground from "../../assets/images/blog/blog-bg.png";

export const BlogListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    padding: 2rem 0;
    width: 100%;
    font-family: "Fira Code", monospace;
    .lodu {
      width: 100%;
      display: flex;
      justify-content: center;
      > div {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
`;

export const BlogCard = styled.div`
  display: flex;
  gap: 2rem;
  width: 80%;
  padding: 2rem;
  border: 2px solid var(--base-orange);
  font-family: "Space Mono", monospace;
  border-radius: 10px;
  margin: 2rem auto;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 95%;
    padding: 1rem;
  }
  .card__left {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    .card__left {
      width: 100%;
    }

    .excerpt {
      font-size: 1.2rem !important;
    }
  }

  .excerpt {
    font-size: var(--fs2);
  }
  .category {
    font-size: 1.2rem;
    background-color: var(--base-orange);
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    opacity: 0.8;

    .coverImage {
      margin-left: auto;
      .gatsby-image-wrapper img {
        border-radius: 10px;
      }
      img {
        width: 100%;
        object-fit: contain;
        border-radius: 10px;
      }
    }
  }
`;

export const FullWidthBlogBg = styled.div`
    background: #000;
    width: 100%;
    background-image: url(${BlogBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    z-index: -1;
`;