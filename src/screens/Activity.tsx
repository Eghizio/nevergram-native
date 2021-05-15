import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView, Text, useWindowDimensions } from "react-native";
import { Center, Row, Padding } from "../components/atoms";
import { activities } from "../data/activity";
import parseDate from "../utils/parseDate";


export interface ActivityProps {
    navigation: any;
};

const padding = { horizontal: 20, vertical: 15 };
const WEEK_MS = 604800000;
const MONTH_MS = WEEK_MS * 4;

// prolly flat list will be better, will replace in future, will use headers for splitting time periods
const Activity: React.FC<ActivityProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    
    // groups activities based on the time period: since - upTo
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
                {renderActivities(WEEK_MS)}
                <HeaderRow>
                    <Padding horizontal={padding.horizontal} vertical={padding.vertical}>
                        <HeaderText>Earlier this month</HeaderText>
                    </Padding>
                </HeaderRow>
                {renderActivities(MONTH_MS, Date.now() - WEEK_MS)}
                <HeaderRow>
                    <Padding horizontal={padding.horizontal} vertical={padding.vertical}>
                        <HeaderText>In the past</HeaderText>
                    </Padding>
                </HeaderRow>
                {renderActivities(0, Date.now() - MONTH_MS)}
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