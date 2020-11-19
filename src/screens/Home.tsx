import React from "react";
import { useWindowDimensions, View } from "react-native";
import { Center } from "../components/atoms";
import Story from "../components/molecules/Story";
import Post from "../components/organisms/Post";
import styled from "styled-components/native";



export interface HomeProps {
    navigation: any;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    
    const stories = [
        { name: "iamBob", avatar: "https://picsum.photos/id/1005/300/300", isPrivate: true },
        { name: "evereb5", avatar: "https://picsum.photos/id/1/300/300"  },
        { name: "michaelJackS00n", avatar: "https://picsum.photos/id/1010/300/300", seen: true },
        { name: "my_name_jeff", avatar: "https://picsum.photos/id/1025/300/300" },
        { name: "carouselxxx", avatar: "https://picsum.photos/id/1069/300/300" },
    ];

    const posts = [
        { author: { name: "iamBob", avatar: "https://picsum.photos/id/1005/300/300" }, images: ["https://picsum.photos/id/1042/400/400"] },
        { author: { name: "evereb5", avatar: "https://picsum.photos/id/1/300/300" }, images: ["https://picsum.photos/id/0/400/400"] },
        { author: { name: "mJackS00n", avatar: "https://picsum.photos/id/1010/300/300" }, images: ["https://picsum.photos/id/102/400/400"] },
        { author: { name: "my_name_jeff", avatar: "https://picsum.photos/id/1025/300/300" }, images: ["https://picsum.photos/id/103/400/400"] },
        { author: { name: "carouselxxx", avatar: "https://picsum.photos/id/1069/300/300" }, images: ["https://picsum.photos/id/1062/400/400", "https://picsum.photos/id/1074/400/400"] },
    ];
    
    // change scroll view to flatlist with stories header and infinite posts
    return (
        <Center>
            <Wall showsVerticalScrollIndicator={false}>
                <Stories
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width, paddingHorizontal: 10 }}
                >
                    <View style={{ padding: 5 }}>
                        <Story key="eghizio" name="My&nbsp;story" avatar="https://picsum.photos/id/1003/106/106" seen={true} isPrivate={false}/>
                    </View>
                    {stories.map(({ name, avatar, seen, isPrivate }) =>
                        <View style={{ padding: 5 }} key={name}>
                            <Story name={name} avatar={avatar} seen={seen} isPrivate={isPrivate}/>
                        </View>
                    )}
                    <View style={{ padding: 5 }}></View>
                </Stories>
                <Posts>
                    {posts.map(({ author, images }) => 
                        <Post key={author.name} author={author} images={images}/>
                    )}
                </Posts>
            </Wall>
        </Center>
    );
};

const Wall = styled.ScrollView``;
const Stories = styled.ScrollView`
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: lightgray;
`;
const Posts = styled.View``;

export default Home;