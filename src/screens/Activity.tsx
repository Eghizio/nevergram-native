import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView, Text, useWindowDimensions } from "react-native";
import { Center, Row, Padding } from "../components/atoms";
import parseDate from "../utils/parseDate";


export interface ActivityProps {
    navigation: any;
};

// prolly flat list will be better, will replace in future, will use headers for splitting time periods
const Activity: React.FC<ActivityProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const padding = { horizontal: 20, vertical: 15 };

    // this should be moved to some state/store/dummydata context
    const year = 2020;
    const month = () => Math.floor(Math.random()*12); //soon will be december so i can leave it :)
    const day = () => Math.ceil(Math.random()*28);
    const hour = () => Math.floor(Math.random()*24);
    const minute = () => Math.floor(Math.random()*60);
    const text = () => [
        "See something here", "Someone followed you", "Pee is stored in balls",
        "The answer is 42 or 44", "Some random stuff here lulz", "ค้้้ค้้้ค้้้ค้้้ค้้้ ค้้้ค้้้ค้้้ ค้้้ค้้้ค้้้ค้้้ค้้้ ค้้้ค้้้"
    ][Math.floor(Math.random()*6)];

    const [activities] = useState(() => {
        const initial = [];

        for(let i=1; i<=100; i++){
            initial.push({
                id: i,
                text: text(),
                date: new Date(year, month(), day(), hour(), minute())
            });
        }

        initial.sort((a, b) => a.date.getTime() > b.date.getTime() ? -1 : 1);
        // console.log(initial.map(el => el.date));

        return initial;
    });

    const renderActivities = (upTo: number, since: number = Date.now()) => {
        upTo = upTo ? Date.now() - upTo : upTo;

        //filter activies, future ones as well XD
        const pastActivities = activities.filter(a => {
            const time = a.date.getTime();
            return (time < since && time > upTo);
        }); 
        
        return pastActivities.map(({ text, id, date }) => {
            const { day, month, hour, minute } = parseDate(date);

            return (
                <ActivityRow
                    key={id}
                    activeOpacity={1}
                    underlayColor="#DDD"
                    onPress={() => console.log(text)}
                >
                    <Padding horizontal={padding.horizontal} vertical={padding.vertical}>
                    <Text>{hour+":"+minute+" "+day+"."+month} {text}</Text>
                    </Padding>
                </ActivityRow>
            );
        });
    };

    return (
        <Center>
            <ScrollView contentContainerStyle={{ width }}>
                <HeaderRow>
                    <Padding horizontal={padding.horizontal} vertical={padding.vertical}>
                        <HeaderText>This week</HeaderText>
                    </Padding>
                </HeaderRow>
                {renderActivities(604800000)}
                <HeaderRow>
                    <Padding horizontal={padding.horizontal} vertical={padding.vertical}>
                        <HeaderText>Earlier this month</HeaderText>
                    </Padding>
                </HeaderRow>
                {renderActivities(604800000*4, Date.now() - 604800000)}
                <HeaderRow>
                    <Padding horizontal={padding.horizontal} vertical={padding.vertical}>
                        <HeaderText>In the past</HeaderText>
                    </Padding>
                </HeaderRow>
                {renderActivities(0, Date.now() -604800000*4)}
            </ScrollView>
        </Center>
    );
};

const HeaderRow = styled(Row)`
    width: 100%;
`;
const HeaderText = styled.Text`
    font-weight: bold;
`;

const ActivityRow = styled.TouchableHighlight`
    width: 100%;
    flex-direction: row;
`;

export default Activity;