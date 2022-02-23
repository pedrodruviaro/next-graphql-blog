// Using graphql client => make queries
import { request, gql } from 'graphql-request';

// GRAPHCMS => config => enviroment
const graphqlAPI = process.env.NEXT_PPUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  //GraphCMS => API Playground

  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            author {
              bio
              id
              name
              photo {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
