import React, { Component } from 'react';
import { Toolbar } from 'react-native-material-ui';

import NavigationDrawer from './navigationDrawer.js'
import PostSection from './postsection/postsection.js';

import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    drawer: {
        width: '66%'
    }
})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
            page: 'posts',
            posts: []
        };
    }

    toggleDrawer() {
        this.setState({ showDrawer: !this.state.showDrawer });
    }

    renderMain(toggleDrawer) {
        return (
            <View>
                <PostSection />
            </View>);
    }

    render() {
        const toggleDrawer = this.toggleDrawer.bind(this);
        const showDrawer = this.state.showDrawer;
        const mainContent = (
            <View style={{ flex: 1 }}>
                <PostSection />
            </View>);

        return (
            <View style={{ flex: 1 }}>
                <Toolbar
                    leftElement={"menu"}
                    onLeftElementPress={toggleDrawer}
                    centerElement={"OddJobb"}
                    rightElement={'menu'} />
                <NavigationDrawer
                    open={showDrawer}
                    mainContent={mainContent}
                    toggleDrawer={toggleDrawer}
                />
            </View >
        );
    }
}

export default App;