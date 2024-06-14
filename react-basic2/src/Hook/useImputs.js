// 반복적인 input을 관리하는 코드를 훅으로 만들기
import React, { useCallback } from "react";

function useInputs(initialForm) {  // 훅으로 사용하려고 하는데, state 확인 정보를 갖고 있지 않아 모든 state를 허용하기 위해 initialForm으로 받는다

    const [form, setForm] = React.useState(initialForm);
    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    // 초기화
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    
    return [form, onChange, reset];
}
export default useInputs;
