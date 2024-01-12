exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/introduction`,
    toPath: `/introduction/vision`,
  })
}