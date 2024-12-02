import React, { useRef, useState } from 'react'
import { View, StyleSheet, Image, Platform, Pressable } from 'react-native';

/*---------------------------Icon imports--------------------------*/
import { CubeTransparentIcon, Bars3BottomLeftIcon, PlusIcon, CodeBracketSquareIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { CubeTransparentIcon as CubeTransparentIconOulitne, Bars3BottomLeftIcon as Bars3BottomLeftIconOutline, PlusIcon as PlusIconOutline, CodeBracketSquareIcon as CodeBracketSquareIconOutline } from "react-native-heroicons/outline";

interface Props {
    openMenu: () => void,
    setType: any
}

const MenuHolder: React.FC<Props> = ({ openMenu, setType }) => {

    const openSceneMenu = (value: string) => {
        openMenu
        setType(value)
    }

    return (
        <View style={styles.menuHolder}>
            <Pressable style={styles.menuButton} onPress={openMenu}>
                <CubeTransparentIconOulitne color={'#ffffff'} />
            </Pressable>
            <Pressable style={styles.menuButton} onPress={openMenu}>
                <PlusIconOutline color={'#ffffff'} />
            </Pressable>
            <Pressable style={styles.menuButton} onPress={openMenu}>
                <Bars3BottomLeftIconOutline color={'#ffffff'} />
            </Pressable>
            <Pressable style={styles.menuButton} onPress={openMenu}>
                <CodeBracketSquareIconOutline color={'#ffffff'} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menuHolder: {
        position: 'relative',
        width: '90%',
        marginLeft: '5%',
        bottom: 10,
        height: 54,
        backgroundColor: 'rgba(10, 10, 10, 0.4)',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        padding: 5
    },
    menuButton: {
        width: '20%',
        height: '100%',
        paddingTop: 10,
        alignItems: 'center'
    }
})

export default MenuHolder