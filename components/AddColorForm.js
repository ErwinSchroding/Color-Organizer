import React , { useRef } from "react";
import { useColors } from "../hooks/color-hooks";

export default function AddColorForm(){
    const txtTitle = useRef();
    const hexColor = useRef();
    const {addColor} = useColors()

    const submit = e => {
        e.preventDefault()
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        addColor(title,color)
       
        txtTitle.current.value = ""
        hexColor.current.value = ""

    }
    return (
        <form onSubmit={submit}>
            <input ref = {txtTitle} type = "text" placeholder="Color Choose" required/>
            <input ref = {hexColor} type="color" required/>
            <button>ADD</button>
        </form>
    )

}
