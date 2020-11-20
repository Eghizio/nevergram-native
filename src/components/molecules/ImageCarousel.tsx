import React from "react";
import styled from "styled-components/native";
import { View, Text, Image } from "react-native";


export interface ImageCarouselProps{
    images: string[];
    size: number;
}

// flatlist instead of scrollview?
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, size }) => {
    return (
        <Container>
            <Carousel
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                disableIntervalMomentum
                decelerationRate="fast"
                removeClippedSubviews
                contentContainerStyle={{ width: size }}
            >
                {images.map((image, i) =>
                    <Image key={i+image} source={{ uri: image, width: size, height: size }}/>
                )}
            </Carousel>
        </Container>
    );
};

const Container = styled.View`

`;

const Carousel = styled.ScrollView`

`;

export default ImageCarousel;