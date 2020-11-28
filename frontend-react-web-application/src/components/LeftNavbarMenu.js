import React from "react";

export default function LeftNavbarMenu(props){
    return(
        <div className="row d-block border-top p-4">
            {props.data.map(p=>
                <p>{p}</p>
            )}
        </div>
    );
}