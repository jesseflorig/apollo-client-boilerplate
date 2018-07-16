import React, { Component  } from 'react'

export default class PostItem extends Component {
  render() {
    return (
      <div key={this.props.id}>
          <span>
            <strong>{this.props.title}</strong> {this.props.category.name}
          </span><br/>
          <small>Written by {this.props.author.firstName} {this.props.author.lastName}</small>
      </div>
    )
  }
}
