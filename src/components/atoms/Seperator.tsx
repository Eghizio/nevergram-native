import styled from "styled-components/native";


export interface SeperatorProps{
    width?: string;
    height?: string;
    color?: string;
}

const Seperator = styled.View<SeperatorProps>`
    align-self: center;
    width: ${props => props.width || "80%"};
    height: ${props => props.height || "1px"};
    background-color: ${props => props.color || "gray"};
    opacity: 0.3;
    margin: 2px 0;
`;

export default Seperator;