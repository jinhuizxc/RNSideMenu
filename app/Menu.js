import React from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';


export default function Menu({onItemSelected}) {

    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{uri}}
                />
                <Text style={styles.name}>Your name</Text>
            </View>
            <Text
                onPress={() => onItemSelected('About')}
                style={styles.item}>
                About
            </Text>
            <Text
                onPress={() => onItemSelected('Contacts')}
                style={styles.item}>
                Contacts
            </Text>
            <Text
                onPress={() => onItemSelected('历史搜索')}
                style={styles.item}>
                历史搜索
            </Text>
            <Text
                onPress={() => onItemSelected('我的关注')}
                style={styles.item}>
                我的关注
            </Text>
            <Text
                onPress={() => onItemSelected('我的收藏')}
                style={styles.item}>
                我的收藏
            </Text>
            <Text
                onPress={() => onItemSelected('我的分享')}
                style={styles.item}>
                我的分享
            </Text>
            <Text
                onPress={() => onItemSelected('时间戳')}
                style={styles.item}>
                时间戳
            </Text>
            <Text
                onPress={() => onItemSelected('设置')}
                style={styles.item}>
                设置
            </Text>
            <Text
                onPress={() => onItemSelected('退出登录')}
                style={styles.item}>
                退出登录
            </Text>
        </ScrollView>
    );
}

Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        paddingTop: 5,
    },
});