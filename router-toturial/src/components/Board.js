import React from "react";
import { Link, Outlet } from "react-router-dom";

function Board() {
    return (
    <div>
        <h1>board</h1>
        <ul>
            <li><Link to="/board/1">1번</Link></li>
            <li><Link to="/board/2">2번</Link></li>
            <li><Link to="/board/3">3번</Link></li>
        </ul>

        {/* <Outlet />을 이용해 하위 컴포넌트를 출력 */}

        <Outlet />

    </div>
);

}

export default Board;