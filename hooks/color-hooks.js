import { createContext, useContext, useState } from "react"
import React from "react"
import colorData from "../src/data/color.json"
import {v4} from "uuid"

export default function ColorProvider({children}){
    const [colors,setColors] = useState(colorData)
    const addColor = (title,color)=>{
        let newColors = [...colors,{id:v4(),title:title,color:color,rating:0}]
        console.log("Add Color ID:",newColors[newColors.length-1].id)
        setColors(newColors) 
    }

    const rateColor=(id,rating)=>{
        let newColors = colors.map(color=>color.id === id? {...color,rating} : color)
        console.log(`设置color id = ${id}的颜色评分为：${rating}`)
        setColors(newColors)
    }

    const removeColor = (id)=>{
        let newColors = colors.filter(color=>color.id !== id)
        console.log("Remove Color ID:",id)
        setColors(newColors);
    }

    return (
        <ColorContext.Provider value={{colors,addColor,rateColor,removeColor}}>
            {children}
        </ColorContext.Provider>
    )
}

const ColorContext = createContext()
export const useColors = ()=>useContext(ColorContext); //返回对象，请使用const {colors} = useColors()这种语句进行析构


