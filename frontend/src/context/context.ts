import {useContext, createContext } from "react";

import { Display } from "../components/Main";

export const DisplayContext = createContext<Display| undefined>(undefined)
export const useDisplayContext = ()=>{
    const display = useContext(DisplayContext);
    if (display === undefined) throw new Error("Context is undefined");

    return display;
}