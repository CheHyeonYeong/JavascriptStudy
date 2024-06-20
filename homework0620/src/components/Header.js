import React from "react";
import { useNavigate } from "react-router-dom";

function Header(){
    let nav = useNavigate();
    const goHome = () => {
        nav('/');
    }    
    const goBoard = () => {
        nav('/board');
    }   
    const goMypage = () => {
        nav('/mypage');
    }  
    return (
        <div>
            <button onClick={goHome}>Home</button>
            <button onClick={goBoard}>Board</button>
            <button onClick={goMypage}>mypage</button>
        </div>
    );
}

export default Header;