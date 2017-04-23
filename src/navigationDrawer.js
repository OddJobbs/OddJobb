import React, { Component, PropTypes } from 'react';
import { Avatar, Drawer, Toolbar } from 'react-native-material-ui';
import DrawerSlide from 'react-native-drawer';

class NavigationDrawer extends Component {
    renderDrawerContents() {
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

    handleClose(open, toggleDrawer) {
        if (open) {
            toggleDrawer();
        }
    }

    handleOpen(open, toggleDrawer) {
        if (!open) {
            toggleDrawer();
        }
    }

    render() {
        const renderDrawerContents = this.renderDrawerContents;
        const { mainContent, onCloseFunction, onOpenFunction, open, toggleDrawer } = this.props;

        const handleClose = this.handleClose.bind(null, open, toggleDrawer);
        const handleOpen = this.handleOpen.bind(null, open, toggleDrawer);

        return (

            <DrawerSlide
                type="displace"
                content={renderDrawerContents()}
                tapToClose={true}
                openDrawerOffset={0.2}
                closedDrawerOffset={-3}
                captureGestures={false}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                panCloseMask={0.2}
                panOpenMask={0.3}
            >
                {mainContent}
            </DrawerSlide>
        );
    }
}

NavigationDrawer.propTypes = {
    mainContent: PropTypes.object,
    open: PropTypes.bool
}

export default NavigationDrawer;