import React from "react";
import { Link, useLocation, useSearchParams, useParams } from 'react-router-dom';

const profileData ={
    testuser : {
        name : "젊은이",
        age : 20,
        description : '샌애긔'
    },
    testuser2 : {
        name : "사람",
        age : 23,
        description : '헌내기'
    },
    testuser3 : {
        name : "인간",
        age : 26,
        description : '화석'
    }
};
function User() {

    const location = useLocation();
    console.log(location);
    console.log(location.search);

    const [obj, setObj] = useSearchParams();

    // let id = obj.get('id');
    // let key = obj.get('key');
    
    // obj.forEach( i => console.log(i) );
    // console.log(id+" : id");
    // obj.set('id', 'test1111');
    // console.log(obj.get('id')+" : 처리후");

    
    let params = useParams();
    const userProfile = profileData[params.id];


    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User Page</Link></li>
                <li><Link to="/info">Info Page</Link></li>
            </ul>
            <h1>User</h1>
            <hr />
            {userProfile ? (
                <div>
                    <h2>{params.id}번 user 페이지</h2>
                    <p>Name: {userProfile.name}</p>
                    <p>Age: {userProfile.age}</p>
                    <p>Description: {userProfile.description}</p>
                </div>
            ) : (
                <p>No data found for user: {params.id}</p>
            )}
        </div>
    );
}

export default User;