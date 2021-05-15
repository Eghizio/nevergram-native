// import { useState } from "react";
import { GestureResponderEvent } from "react-native";

const useDoublePress = (callback: (event: GestureResponderEvent) => any, delay: number = 300) => {
    // const [lastPress, setLastPress] = useState<number>(0); // causes additional rerenders
    let lastPress: number = 0;

    const handleDoublePress = (event: GestureResponderEvent) => {
        const now = new Date().getTime();

        if(lastPress && (now - lastPress) < delay){
            // setLastPress(0);
            lastPress = 0;
            callback(event);
        }
        else{
            // setLastPress(now);
            lastPress = now;
        }
    };

    return handleDoublePress;
};

export default useDoublePress;