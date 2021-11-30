import React from "react";
import "./style.global.css";

function ToggleMenu(){
    
    function handleToggleMenu(){
        const menu = document.querySelector(".vtex-flex-layout-0-x-flexRow--wrapper_row_menu");
        menu.classList.toggle("inative")
    };

    return(
        
        <a onClick={handleToggleMenu} className="drawer_custom_container">
            <span  className="drawer_bar"></span>
        </a>
    );
};
export default ToggleMenu;