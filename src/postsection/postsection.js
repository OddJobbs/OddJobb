import React, { Component, PropTypes } from 'react';

import PostList from './postList.js';
import ajax from '../resource/ajax.js';

class PostSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        ajax.get('http://oddjobbackend.herokuapp.com/posts').then((posts) => {
            this.setState({
                posts: JSON.parse(posts.xhr._response)
            })
        });
    }

    render() {
        const posts = this.state.posts;

        return (
            <PostList posts={posts} />
        );
    }
}

export default PostSection;