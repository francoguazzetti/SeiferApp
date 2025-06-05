import { Text, View, Pressable, StyleSheet, GestureResponderEvent } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    onInfo: (event: GestureResponderEvent) => void;
    onMore: (event: GestureResponderEvent) => void;
    onProfile: (event: GestureResponderEvent) => void;
}



export default function BottomBar({onInfo, onMore, onProfile} : Props) {

    const { bottom: insetBottom } = useSafeAreaInsets();
    
    return (
        <View style={[styles.BottomBar, { paddingBottom: insetBottom, height: 72 + insetBottom }]}>
            <Pressable style={styles.button} onPress={onInfo}>
                <Ionicons name="alert-circle" color='#555' size={28} /> 
            </Pressable>
            <Pressable style={styles.centerLabel} onPress={onMore}>
                <Text style={styles.centerS}>S</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onProfile}>
                <Ionicons name="person-outline" color='#555' size={28} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    BottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 1000
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    centerLabel: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#CB6730',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        zIndex: 1001,
    },
    centerS: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
    },
    });