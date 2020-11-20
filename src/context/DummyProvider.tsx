import React, { createContext, useContext } from "react";
import dummyData from "./dummyData";


const DummyContext = createContext(dummyData);
export const useDummyData = () => useContext(DummyContext);

const DummyProvider: React.FC = ({ children }) => {
    return (
        <DummyContext.Provider value={dummyData}>
            {children}
        </DummyContext.Provider>
    );
};

export default DummyProvider;