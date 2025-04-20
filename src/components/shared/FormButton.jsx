import React from 'react';

export default function FormButton(props) {
    return (
        <div id="button" className="row">
            <button className="btn">{props.title}</button>
        </div>
    );
}