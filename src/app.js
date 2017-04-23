import React, { Component } from 'react';
import { Avatar, Drawer, Toolbar } from 'react-native-material-ui';

import PostSection from './postsection/postsection.js';

import { View } from 'react-native';

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
        this.setState({ showDrawer: !this.state.showDrawer })
    }

    renderDrawer() {
        return (
            <Drawer>
                <Drawer.Header >
                    <Drawer.Header.Account
                        avatar={<Avatar text={'A'} />}
                        accounts={[
                            { avatar: <Avatar text="B" /> },
                            { avatar: <Avatar text="C" /> },
                        ]}
                        footer={{
                            dense: true,
                            centerElement: {
                                primaryText: 'Reservio',
                                secondaryText: 'business@email.com',
                            },
                            rightElement: 'arrow-drop-down',
                        }}
                    />
                </Drawer.Header>
                <Drawer.Section
                    divider
                    items={[
                        { icon: 'bookmark-border', value: 'Notifications' },
                        { icon: 'today', value: 'Calendar', active: true },
                        { icon: 'people', value: 'Clients' },
                    ]}
                />
                <Drawer.Section
                    title="Personal"
                    items={[
                        { icon: 'info', value: 'Info' },
                        { icon: 'settings', value: 'Settings' },
                    ]}
                />
            </Drawer>
        );
    }

    render() {
        const toggleDrawer = this.toggleDrawer.bind(this);
        const renderDrawer = this.renderDrawer.bind(this);
        const showDrawer = this.state.showDrawer;

        return (
            <View>
                <Toolbar
                    leftElement={"menu"}
                    onLeftElementPress={toggleDrawer}
                    centerElement={"OddJobb"}
                    rightElement={'menu'} />
                <PostSection>
                    {showDrawer && renderDrawer()}
                </PostSection>
            </View>
        );
    }
}

export default App;