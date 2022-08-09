import React from "react";
import "./style.css";

export function Message(props)
{

    return(
        <p className="style-text">{props.text}</p>
    );
}