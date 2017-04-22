import React, { Component } from 'react';
import { Avatar, Card, ListItem, Toolbar } from 'react-native-material-ui';

import ajax from './resource/ajax.js';
import PostCard from './postCard.js';

import { Text, ScrollView, View } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'posts',
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
            <View>
                <Toolbar
                    leftElement="menu"
                />
                <PostCard posts={posts} />

            </View>
        );
    }
}

export default App;