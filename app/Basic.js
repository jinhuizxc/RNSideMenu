import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

/**
 * <SideMenu
 menu={menu}
 isOpen={this.state.isLeftOpen}
 menuPosition='left'
 onChange={{}}
 openMenuOffset={200}>

 <SideMenu
 menu={menu}
 isOpen={this.state.isRightOpen}
 menuPosition='right'
 onChange={{}}
 openMenuOffset={200}>

 //content
 <View style={{flex: 1,backgroundColor:'#999'}}>
 </View>

 </SideMenu>
 </SideMenu>
 */
const image = require('../assets/menu.png');


export default class Basic extends Component {


    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.state = {
            isOpen: false,
            isRightOpen:false,
            selectedItem: 'About',
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    toggle1() {
        this.setState({
            isRightOpen: !this.state.isRightOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({isOpen});
    }

    updateMenuState1(isRightOpen) {
        this.setState({isRightOpen});
    }
    onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;

        return (


            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={isOpen => this.updateMenuState(isOpen)}>

                <SideMenu
                    menu={menu}
                    isOpen={this.state.isRightOpen}
                    menuPosition='right'
                    onChange={isRightOpen => this.updateMenuState1(isRightOpen)}
                    // 设置间距
                    openMenuOffset={200}>


                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        side-menu!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+Control+Z for dev menu
                    </Text>
                    <Text style={styles.instructions}>
                        Current selected menu item is: {this.state.selectedItem}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={this.toggle}
                    style={styles.button}>
                    <Image
                        source={image}
                        style={{width: 32, height: 32}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.toggle1}
                    style={styles.button1}>
                    <Image
                        source={image}
                        style={{width: 32, height: 32}}
                    />
                </TouchableOpacity>


                </SideMenu>
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        // top: 20,
        padding: 10,
    },
    button1: {
        position: 'absolute',
        // top: 20,
        right: 5,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
