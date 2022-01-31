import React, {useState} from "react";

function Header({onDarkModeClick, isDarkModeProp}){
    
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkModeProp ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;