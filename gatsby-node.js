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
      allContentfulNotice(sort: { createdAt: DESC }, limit: 1000) {
        nodes {
          id
          title
          content {
            id
            content
          }
          updatedAt(formatString: "YYYY-MM-DD")
          createdAt(formatString: "YYYY-MM-DD")
          isFixed
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const notices = result.data.allContentfulNotice.nodes;

  const postsPerPage = 10;

  const numPages = Math.ceil(notices.length / postsPerPage);

  Array.from(notices).forEach((notice, index) => {
    createPage({
      path: `/help/notice/detail/${notice.id}`,
      component: path.resolve('' + './src/components/Notice/NoticeDetailPage.tsx'),
      context: {
        id: notice.id,
        title: notice.title,
        content: notice.content,
        createdAt: notice.createdAt,
        updatedAt: notice.updatedAt,
        fixed: notice.fixed,
      },
    });
  });

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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulNewsContent {
      id: String
      content: String
    }
    
    type ContentfulNews implements Node {
      id: ID!
      title: String!
      content: ContentfulNewsContent
      imgUrl: String
      slug: String
      newsUrl: String
    }
  `
  createTypes(typeDefs)
}
