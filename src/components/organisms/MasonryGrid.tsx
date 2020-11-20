import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export interface MasonryGridProps{

}

// split to rows, first row 3 small, second row 1 small and 1/2 of huge(4 blocks), third row same as second, repeat alternating left, right
/* E, J are big ones, 6 items per 3x3
    A B C
    D E E
    F E E
    G H I
    J J K
    J J L
*/
const MasonryGrid: React.FC<MasonryGridProps> = (props) => {
    return (
        <View>
            <Text>MasonryGrid</Text>
        </View>
    );
};

export default MasonryGrid;