import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_POSTS = gql`
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
    `

const PostList = () => (
  <Query query={GET_POSTS} >
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
