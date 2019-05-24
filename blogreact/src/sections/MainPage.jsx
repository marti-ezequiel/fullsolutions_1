import React, { Component } from 'react'
import PostItem from '../elements/PostItem'
import postService from '../services/Post.Service'

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount = () => {
    
    postService
      .getAll()
      .then(posts => {
        this.setState({
          posts
        })
      });
  }

  render() {
    return (
      <PostItem />
    );
  }
}
