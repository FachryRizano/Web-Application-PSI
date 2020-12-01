import React,{Fragment}from "react";
import Button from "../components/Button";

export default function LeftNavbarMenu(props){
    return(
        <Fragment>
            <div className="row border-top p-4">
                <Button icon={props.icon} text={props.text}/>
                {props.data.map(p=>
                    <Button text={p}/> 
                )}
            </div>
        </Fragment>
    );
}