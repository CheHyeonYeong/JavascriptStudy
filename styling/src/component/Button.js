// Button
import React from 'react';
import './Button.scss';

function Button({ children, size, color ,outline}) {
    // 1. 버튼 생성
    // 2. 버튼 사이즈 조정하기
    // 3. 버튼 색상 설정하기 ... ()
    // 4. outline 옵션 : 버튼에서 테두리만 보여지게 설정
    // className = 'Button large(size)' : 두가지가 같이 들어감
    const classNames = ['Button', size, color];
    if (outline) {
        classNames.push('outline');
    }

    return (
        <button className={classNames.join(' ')}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};
export default Button;