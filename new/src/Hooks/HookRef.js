import React from "react";

function HookRef() {
    const [form, setForm] = React.useState({ data: '', result: '' });
    const inputRef = React.useRef(null);        

    const handleChange = (e) => {
        setForm({ ...form, data: e.target.value });
    };

    const handleClick = (e) => {
        setForm({ ...form, result: form.data });
        inputRef.current.focus();
            
        // inputRef.current.value = 'test';
        // inputRef.current.type = 'email';
    };

    return (    
        <div>
            할 일 : <input type="text" onChange={handleChange} ref={inputRef} value={form.data} />
            <button onClick={handleClick}>등록하기</button>
            <br />
            결과 : {form.result}
        </div>
    );
}

export default HookRef;
