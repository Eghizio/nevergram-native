import React from "react";
import { View, Text, Modal } from "react-native";
import styled from "styled-components/native";

export interface PostOptionsModalProps{
    isOpened: boolean;
}

const PostOptionsModal: React.FC<PostOptionsModalProps> = ({ isOpened }) => {
    return ( // seems to doesnt work on rn-web
        <Modal
            visible={isOpened}
            animationType="slide"
            style={{borderWidth: 0}}
        >
            <View>
                <Text>PostOptionsModal</Text>
            </View>
        </Modal>
    );
};

export default PostOptionsModal;