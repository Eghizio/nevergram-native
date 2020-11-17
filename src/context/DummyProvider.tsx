import React, { createContext, useContext } from "react";
import * as dummyData from "./dummyData.json";


const data = {
    someKey: dummyData
};

const DummyContext = createContext(data);
export const useDummyData = () => useContext(DummyContext);

const DummyProvider: React.FC = ({ children }) => {
    return (
        <DummyContext.Provider value={data}>
            {children}
        </DummyContext.Provider>
    );
};

export default DummyProvider;