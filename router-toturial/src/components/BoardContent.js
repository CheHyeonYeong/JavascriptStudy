import React from "react";
import { useParams } from "react-router-dom";

function BoardContent() {

    let {num} = useParams();
    
    return (
        <div>
            <h1>글 상세 페이지</h1>
            <h2>{num}번</h2>
        </div>
    );
}   

export default BoardContent