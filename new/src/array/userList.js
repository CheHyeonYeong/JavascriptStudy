import React from "react";

function UserList() {
    const users = [
        {
            id: 1,
            username: 'hyeonyeong',
            email: '9jJtH@example.com'       
        },
        { 
            id: 2,
            username: 'hyeon',
            email: '9jJ13tH@example.com'
        },
        {
            id: 3,
            username: 'yeong',
            email: '9jJ3131321tH@example.com'       
        }
    ];

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>

    )
}
export default UserList;