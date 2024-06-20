import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <ul>
                {/* 
                Link 태그를 이용해서 다른 페이지 이동, to 속성을 이용하여 연결할 주소를 적는다. 어느 컴포넌트든 사용이 가능하다. 
                 */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">회원 페이지</Link></li>
                <li><Link to="/info">정보 페이지</Link></li>
                <li>
                    <Link to="/user?id=aaa111&key=1">회원페이지(쿼리 param처리...)</Link>
                </li>
            </ul>

            <hr />
            <ul>
                <li><Link to="/info/1"> 1번 info </Link></li>
                <li><Link to="/info/2"> 2번 info </Link></li>
                <li><Link to="/info/3"> 3번 info </Link></li>
            </ul>
            <h1>Home</h1>
        </div>
    );
}   

export default Home;