import React from "react";

export default function MovieDetail(props){
    console.log(props);
        // http://localhost:3000/movies/413155156?test=hello&name=채현영
    return(
        <div>
            <h1>{props.params.id}</h1>
        </div>
    );
}