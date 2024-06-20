import React from "react";
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User Page</Link></li>
                <li><Link to="/info/">Info Page</Link></li>
            </ul>
            <h1>User</h1>
        </div>
    );
}   

export default User;
