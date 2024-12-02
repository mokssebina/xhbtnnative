import React, { useRef, useState } from 'react'
import { View, StyleSheet, Image, Platform, Modal, Pressable } from 'react-native';

/*---------------------------Modal imports--------------------------*/
import RBSheet from 'react-native-raw-bottom-sheet';

/*---------------------------Icon imports--------------------------*/
import { XMarkIcon } from "react-native-heroicons/solid";
import { XMarkIcon as XMarkIconOutline } from "react-native-heroicons/outline";



interface Props {
    show: boolean,
    closeModal: () => void,
    refRBSheet: any
}

const PostModal: React.FC<Props> = ({ show, closeModal, refRBSheet }) => {
    return (

        <RBSheet
            ref={refRBSheet}
            useNativeDriver={true}
            height={300}
            customStyles={{
                wrapper: {
                    backgroundColor: 'transparent',
                },
                draggableIcon: {
                    backgroundColor: '#000',
                },
            }}
            customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
            }}
            customAvoidingViewProps={{
                enabled: false,
            }}
        >

            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Pressable style={styles.closeModalButton} onPress={closeModal}>
                        <XMarkIconOutline size={28} />
                    </Pressable>
                </View>
            </View>

        </RBSheet>
    )

}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        //bottom: 0
    },
    modalHeader: {
        width: '100%',
        height: 50
    },
    closeModalButton: {
        position: 'absolute',
        width: 50,
        height: '100%',
        right: 0,
        textAlign: 'center',
        padding: 10,
    }
})

export default PostModal