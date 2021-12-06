import React,{useState,useEffect} from "react";
import "./style.global.css";

function ToggleMenu(){

    const [toggleOnScroll,setToggleOnScroll] = useState(0)

    function handleToggleMenu(){
        const menu = document.querySelector(".vtex-flex-layout-0-x-flexRow--wrapper_row_menu");
        menu.classList.toggle("active")
    };
    
    useEffect(()=>{
        
        document.addEventListener("scroll",()=>{
            setToggleOnScroll(window.scrollY)
        })
    })

    return(
        <>
            {toggleOnScroll == 0?null: <a onClick={handleToggleMenu} className="drawer_custom_container">
                <span  className="drawer_bar"></span>
            </a>}
        </>
    );
};
export default ToggleMenu;