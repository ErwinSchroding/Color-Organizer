import React,{useState,useContext} from "react";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

export default function App(){
   
    //setColors通常传入值，函数会将当前状态更新为传入的值。也可以传入函数，函数的参数为当前状态，返回值被用来更新状态。
    return (
        <>
            <ColorList/>
            <AddColorForm/>
        </>
    ) 
}
