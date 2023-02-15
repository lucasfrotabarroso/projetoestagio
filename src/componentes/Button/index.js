import React from "react";
import * as C from './styles';
const  Button = ({text,onClick,type="button"}) => {
    return(
    <C.Button type = {type} onClick={onClick}>
        Entrar
     {text}
    </C.Button>

    );
};
export default Button;