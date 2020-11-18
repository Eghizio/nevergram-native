import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Center } from "../components/atoms";
import Post from "../components/molecules/Post";



export interface HomeProps {
    navigation: any;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const posts = [
        { author: { name: "iamBob", avatar: "https://picsum.photos/id/1005/300/300" }, images: ["https://picsum.photos/id/1042/400/400"] },
        { author: { name: "evereb5", avatar: "https://picsum.photos/id/1/300/300" }, images: ["https://picsum.photos/id/0/400/400"] },
        { author: { name: "michaelJackS00n", avatar: "https://picsum.photos/id/1010/300/300" }, images: ["https://picsum.photos/id/102/400/400"] },
        { author: { name: "my_name_jeff", avatar: "https://picsum.photos/id/1025/300/300" }, images: ["https://picsum.photos/id/103/400/400"] },
        { author: { name: "carouselxxx", avatar: "https://picsum.photos/id/1069/300/300" }, images: ["https://picsum.photos/id/1062/400/400", "https://picsum.photos/id/1074/400/400"] },
    ];

    return (
        <Center>
            <Text>Home screen</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            {posts.map(({ author, images }) => 
                <Post key={author.name} author={author} images={images}/>
            )}
            </ScrollView>
        </Center>
    );
};

export default Home;