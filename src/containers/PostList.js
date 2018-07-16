import React, { Component  } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PostItem from '../components/PostItem'

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

export default class PostList extends Component {
  render() {
    return (
      <Query query={GET_POSTS} >
        {({loading, error, data}) => {
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error :(</p>
          return  data.posts.map(({ id, title, category, author }) => (
            <PostItem id={id} title={title} category={category} author={author}>
            </PostItem>
          ))
        }}
      </Query>
    )
  }
}
