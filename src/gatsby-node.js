import createNodeHelpers from 'gatsby-node-helpers'
import pipe from 'lodash/fp/pipe'
import fetchData from './fetch'

const { createNodeFactory } = createNodeHelpers({ typePrefix: `Prismic` })

const DocumentNode = createNodeFactory(`Document`)

export const sourceNodes = async (
  { boundActionCreators: { createNode } },
  { repositoryName, accessToken, options }
) => {
  const { documents } = await fetchData({ repositoryName, accessToken, options })

  documents.forEach(pipe(DocumentNode, createNode))
}
