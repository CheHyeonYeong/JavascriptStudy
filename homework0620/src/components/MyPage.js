import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

// 계정 정보를 위한 객체 생성
const users = {
    testuser: {
        name: "젊은이",
        age: 20,
        description: "샌애긔",
    },
    testuser2: {
        name: "사람",
        age: 23,
        description: "헌내기",
    },
    testuser3: {
        name: "인간",
        age: 26,
        description: "화석",
    },
    testuser4: {
        name: "John Doe",
        age: 25,
        description: "I am a software developer.",
    },
};

function MyPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = Object.values(users).find((user) => user.name === username);
        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user);
        } else {
            alert("Invalid username");
        }
    };

    if (!isLoggedIn) {
        return (
            <div>
                <Header />
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <h1>로그인 한 사용자 정보 출력</h1>
            <div>
                <p>Name: {currentUser.name}</p>
                <p>Age: {currentUser.age}</p>
                <p>Description: {currentUser.description}</p>
            </div>
        </div>
    );
}

export default MyPage;