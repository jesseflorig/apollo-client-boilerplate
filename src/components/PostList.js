import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const PostList = () => (
  <Query
    query={ gql`
      {
        posts {
          id
          title
          category {
            name
          }
          author {
            firstName
            lastName
          }
        }
      }  
    `}
  >
    {({loading, error, data}) => {
      if(loading) return <p>Loading...</p>
      if(error) return <p>Error :(</p>

      return  data.posts.map(({ id, title, category, author }) => (
        <div key={id}>
          <span><strong>{title}</strong> {category.name}</span><br/>
          <small>Written by {author.firstName} {author.lastName}</small>
        </div>
      ))
    }}
  </Query>
)

export default PostList
