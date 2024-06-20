import React from "react";
import { Link, useParams } from 'react-router-dom';

function Info() {
    let param = useParams();
    console.log(param);

    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">회원 페이지</Link></li>
                <li><Link to="/info">정보 페이지</Link></li>
            </ul>

            <h2>{param.num}번 info 페이지</h2>
            <p> 이 페이지는 React Router를 이용한 페이지 처리 결과 입니다.</p>
            <h1>Info</h1>
        </div>
    );
}   

export default Info;