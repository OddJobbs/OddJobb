import React, { Component, PropTypes } from 'react';
import { Avatar, Card, ListItem } from 'react-native-material-ui';

import { Text, ScrollView, View } from 'react-native';

class PostList extends Component {
    constructor(props) {
        super(props);
    }

    createPosts() {
        const postList = [];
        this.props.posts.forEach((item) => {
            if (item.content) {
                postList.push(
                    <Card key={item._id}>
                        <ListItem
                            key={`${item.id}header`}
                            leftElement={<Avatar text="JM" />}
                            centerElement={{
                                primaryText: item.creator,
                                secondaryText: '3 weeks ago'
                            }}
                        />
                        <View
                            key={`${item.id}view`}>
                            <Text key={`${item.id}text`}>
                                {item.content}
                            </Text>
                        </View>
                    </Card>
                );
            }
        });
        return postList;
    }

    render() {
        const createPosts = this.createPosts.bind(this);
        return (
            < ScrollView >
                {createPosts()}
            </ScrollView >
        );
    }
}

PostList.propTypes = {
    posts: PropTypes.array
}

export default PostList;