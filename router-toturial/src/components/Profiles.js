import React from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import User from "./User";


function Profiles() {
    return (
        <div>


            <h1>Profile</h1>
            <ul>
                <li><Link to="/profile/testuser"> 1번 user </Link></li>
                <li><Link to="/profile/testuser2"> 2번 user </Link></li>
                <li><Link to="/profile/testuser3"> 3번 user </Link></li>
                <li><Link to="/profile/4"> 4번 user </Link></li>
            </ul>
            {/* <Outlet /> */}
            {/* 하위 경로 설정.. */}
            <Routes>
                <Route path='/' 
                element={<h3>사용자를 선택해주세요.</h3>}
                />
                <Route path='/:id' element={<User />} />
            </Routes>
            
        </div>
    );
}

export default Profiles;