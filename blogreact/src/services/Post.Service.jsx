import React, { Component } from 'react'
import Axios from "axios";

export class PostService extends Component {
    constructor(props) {
        super(props);
    }

    getAll() {
        return Axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.data);
    }
}

const postService = new PostService();
export default postService;