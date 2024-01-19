const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { graphql } = require('gatsby');

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  createRedirect({
    fromPath: `/introduction`,
    toPath: `/introduction/vision`,
  });

  //   pagination
  const result = await graphql(`
    query {
      allContentfulNotices(sort: { createdAt: DESC }, limit: 1000) {
        nodes {
          id
          title
          content {
            id
            content
          }
          updatedAt(formatString: "YYYY-MM-DD")
          createdAt(formatString: "YYYY-MM-DD")
          fixed
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const notices = result.data.allContentfulNotices.nodes;
  const postsPerPage = 10;
  const numPages = Math.ceil(notices.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/help/notice` : `/help/notice/${i + 1}`,
      component: path.resolve('' + './src/components/Notice/NoticePage.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numNotices: notices.length,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
