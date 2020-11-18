import React from "react";
import { View } from "react-native";


export interface PaddingProps{
    // padding?: string;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

const Padding: React.FC<PaddingProps> = ({ horizontal, vertical, top, bottom, left, right, children }) => {
    return (
        <View
            style={{
                // padding: padding,
                paddingHorizontal: horizontal,
                paddingVertical: vertical,
                paddingTop: top,
                paddingBottom: bottom,
                paddingLeft: left,
                paddingRight: right
            }}
        >
            {children}
        </View>
    );
};

export default Padding;