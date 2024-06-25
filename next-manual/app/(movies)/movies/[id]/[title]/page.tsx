import React from "react";

export default function MovieTitle({params: {id, title}}: {params : {id: BigInteger, title: string}}) {
    console.log(title);
    return(
        <div>
            <h1>movie title: {id}</h1>
            <h1>movie title: {title}</h1>
        </div>
    );
}