import React from 'react';

export default function Button(props){
    return(
        <span className="container">
            <button className="btn bg-light"><i className={`fa fa-${props.icon}`}> {props.text}</i></button>
        </span>
    );
}