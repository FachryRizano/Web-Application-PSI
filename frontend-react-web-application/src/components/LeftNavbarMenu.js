import React from "react";
import Button from "../components/Button";

export default function LeftNavbarMenu(props){
    return(
        <div className="row p-4">
            <Button icon={props.icon} text={props.text}/>
            {props.data.map((p,index)=>
                <Button keys={index} text={p}/>
                 
            )}
        </div>
    );
}