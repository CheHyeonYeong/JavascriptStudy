import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Mypage() {
    
    // 쿼리 스트링을 사용해 login여부 전달 => 로그인 여부에 따라 동작하도록 

    // 렌더링 과정에서 UseNavigate() 훅을 사용할 수 없다는 경고 후 동작 x
    // let login = false;
    // if(login) {777
    //     nav('/');
    // }
 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const login = queryParams.get('login') === 'true'; // 쿼리 스트링에서 'login' 값 가져오기

    if (!login) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <div>
            <h1>로그인 한 사용자만 접근 가능함.</h1>
        </div>
    );

}   

export default Mypage