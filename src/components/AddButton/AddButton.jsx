import React from 'react';
import "./AddButton.css";
export const AddButton = (props) => {

    return <div className="fab" onClick={props.onClick}> + </div>;
};
