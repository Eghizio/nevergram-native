import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";


export interface FadeInViewProps{
    duration: number;
    delay?: number;
    initialOpacity?: number;
    finalOpacity?: number;
}

const FadeInView: React.FC<FadeInViewProps> = ({ duration, delay=0, initialOpacity=0, finalOpacity=1, children }) => {
    const fadeInAnimation = useRef(new Animated.Value(initialOpacity)).current;
    
    useEffect(() => {
        Animated.timing(
            fadeInAnimation,
            { useNativeDriver: true, toValue: finalOpacity, duration, delay }
        ).start();
    }, [fadeInAnimation]);

    return (
        <Animated.View>
            {children}
        </Animated.View>
    );
};

export default FadeInView;