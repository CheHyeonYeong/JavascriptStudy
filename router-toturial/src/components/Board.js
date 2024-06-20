import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './my.css'; // Ensure the correct path to your CSS file

function Board() {
    const myStyle = {
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        float: 'right'
    };

    return (
        <div>
            <h1>board</h1>
            <ul>
                <li><Link to="/board/1">1번</Link></li>
                <li><Link to="/board/2">2번</Link></li>
                <li><Link to="/board/3">3번</Link></li>

                <li>
                    <NavLink 
                        to="/board/1" 
                        className={({ isActive }) => isActive ? 'rainbow-animation' : undefined} 
                        style={({ isActive }) => isActive ? myStyle : undefined}
                    >
                        1번
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/board/2" 
                        className={({ isActive }) => isActive ? 'rainbow-animation' : undefined} 
                        style={({ isActive }) => isActive ? myStyle : undefined}
                    >
                        2번
                    </NavLink>
                </li>   

                <li>
                    <NavLink 
                        to="/board/3" 
                        className={({ isActive }) => isActive ? 'rainbow-animation' : undefined} 
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
