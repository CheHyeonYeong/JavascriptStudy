import React from "react";
import { useNavigate } from "react-router-dom";
function Header() { 
    // useNavigate() 훅

    let nav = useNavigate();
    const goHome = () => {
        nav('/');
    }
    const goBoard = () => {
        nav('/board');
    }   

    const goUser = () => {
        nav('/user');
    }
    
    const goMypage = () => {
        nav('/mypage');
    }
    
    return (
        <div>
            <button onClick={() => nav(-1)}>hello</button>
            <button onClick={goHome}>Home</button>
            <button onClick={goBoard}>Board</button>
            <button onClick={goUser}>User</button>
            <button onClick={goMypage}>마패</button>
        </div>
    )
}

export default Header