import React from "react";
import Button from "../components/Button";

export default function LeftNavbarMenu(props){
    return(
        <div className="row d-block border-top p-4">
            {props.data.map(p=>
                <button className="btn">{p}</button>
            )}
        </div>
    );
}