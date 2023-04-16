import React,{useState} from "react";
import {FaStar} from "react-icons/fa"

const createArray = length => [...Array(length)]

const Star = ({selected=false,onSelect =  f=> f})=>(
    <FaStar  color={selected ? "red":"grey"} onClick={onSelect}/>
)   

export default function StarRating({style = {} , totalStars = 5,selectedStars=0,onRate=f=>f}){

    return (
        <div style={{padding:"5px",...style}}>
            {createArray(totalStars).map((n,i)=>(
                <Star key = {i} selected={selectedStars > i} onSelect={()=> onRate(i+1)} /> //这里的i+1与(i)=>i+1不同，这里的i+1是直接返回i+1的结果，而不是传入
            ))}
            <p>{selectedStars} of {totalStars}</p>
        </div>
        
    )
}


