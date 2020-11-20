import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, Image, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { Padding } from "../atoms";


export interface ImageCarouselProps{
    images: string[];
    size: number;
}

// flatlist instead of scrollview?
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, size }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, contentSize } = event.nativeEvent;

        const currentItem = contentOffset.x / contentSize.width * images.length;
        
        setCurrentImageIndex(currentItem);
    };

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
                scrollEventThrottle={0}
                onScroll={handleScroll}
            >
                {images.map((image, i) =>
                    <Image key={i+image} source={{ uri: image, width: size, height: size }}/>
                )}
            </Carousel>
            {(images.length > 1) &&
                <CurrentIndicator>
                    {images.map((image, i) =>
                        <Padding key={image} horizontal={4}>
                            <Indicator active={i === currentImageIndex}/>
                        </Padding>
                    )}
                </CurrentIndicator>
            }
        </Container>
    );
};

const Container = styled.View`

`;

const Carousel = styled.ScrollView`

`;

const CurrentIndicator = styled.View`
    position: absolute;
    top: 100%;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
`;
const Indicator = styled.View<{ active: boolean }>`
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background-color: ${props => props.active ? "tomato" : "gray"};
`;

export default ImageCarousel;