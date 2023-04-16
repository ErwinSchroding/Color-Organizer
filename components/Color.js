import React from "react";
import StarRating from "./StarRating";
import  {FaTrash} from "react-icons/fa"
import { useColors } from "../hooks/color-hooks";

export default function Color({id,title,color,rating}){
    const {removeColor,rateColor} = useColors()
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={()=>removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{height:50,background:color}}/>
            <StarRating selectedStars={rating} onRate={rating => rateColor(id,rating)}/>
        </section>
    )
}


// 用户
// <button onClick={onRemove(id)}>
// <FaTrash/>
// </button>
// 这段代码有问题吗，为什么

// model: gpt-3.5-turbo, token estimate: 76

// 助手
// 这段代码有问题，应该是使用了错误的事件绑定方式。
// 在这段代码中，使用了函数调用的方式，将 onRemove(id) 函数的返回值绑定给了 onClick 事件
//即在渲染 <button> 元素时就立即执行了 onRemove(id) 函数，并将其返回值（应该是 undefined）赋值给了 onClick 事件，导致在点击按钮时无法触发正确的函数调用。
// 正确的绑定方式应该是将一个函数（而不是函数调用）绑定给 onClick 事件，例如使用箭头函数或者 bind 方法：

// 使用箭头函数：
// <button onClick={() => onRemove(id)}>
//   <FaTrash />
// </button>