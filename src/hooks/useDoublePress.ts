import { useState } from "react";
import { GestureResponderEvent } from "react-native";

const useDoublePress = (callback: () => any, delay: number = 300) => {
    const [lastHeroPress, setLastHeroPress] = useState<number>(0);

    const handleDoublePress = (event: GestureResponderEvent) => {
        const now = new Date().getTime();

        if(lastHeroPress && (now - lastHeroPress) < delay){
            setLastHeroPress(0);
            callback();
        }
        else{
            setLastHeroPress(now);
        }
    };

    return handleDoublePress;
};

export default useDoublePress;