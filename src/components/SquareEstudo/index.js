import React from 'react';

import "./styles.css";

const handleClick = texto => () => console.log(texto);

const SquareEstudo =  () =>  (
    <button 
    onClick = {handleClick("coiso")}
    className="square-estudo">X</button>
);

export default SquareEstudo;