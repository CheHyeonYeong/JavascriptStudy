import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

function Board() {
    const myStyle = {
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        float: 'right'
    };

    return (
        <div>
            <Header />
            <h1>board</h1>
            <ul>
                <li>
                    <NavLink 
                        to="/board/1" 
                        style={({ isActive }) => isActive ? myStyle : undefined}
                    >
                        1번
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/board/2" 
                        style={({ isActive }) => isActive ? myStyle : undefined}
                    >
                        2번
                    </NavLink>
                </li>   

                <li>
                    <NavLink 
                        to="/board/3" 
                        style={({ isActive }) => isActive ? myStyle : undefined}
                    >
                        3번
                    </NavLink>
                </li>   
            </ul>

            {/* <Outlet />을 이용해 하위 컴포넌트를 출력 */}
            <Outlet />
        </div>
    );
}

export default Board;