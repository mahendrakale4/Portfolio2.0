// const SingleBlogTemplate = require.resolve("./src/templates/blog.js");
// 
// exports.createPages = async function ({ graphql, actions }) {
//   const { createPage } = actions;
//   const result = await graphql(`
//     query MyQuery {
//       allSanityBlog {
//         nodes {
//           Title
//           slug {
//             current
//           }
//           _id
//         }
//       }
//     }
//   `);
// 
//   if (result.errors) throw result.errors;
//   result.data.allSanityBlog.nodes.forEach((blog) => {
//     const slug = blog.slug.current;
//     const id = blog._id;
//     createPage({
//       path: `/blog/${slug}`,
//       component: SingleBlogTemplate,
//       context: { slug: slug,id: id },
//     });
//   }
//   );
// };
