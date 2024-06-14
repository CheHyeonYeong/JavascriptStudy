import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import styles from "./Checkbox.module.css";
import classNames from "classnames/bind";

// 1. checkbox 생성
// 2. checkbox icon 사용 => react-icons 설치, font awesome, ionicons, Material Design Icons 등을 쉽게 사용할 수 있게 하는 라이브러리
// 3. classnames/bind 사용 => cx('클래스이름')

function Checkbox({children, checked, ...rest}) {
    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked} {...rest}/>
                <div className={styles.icon}>{checked ? <MdCheckBox className={styles.checked}/> : <MdCheckBoxOutlineBlank />}</div>
            </label>
            <span>{children}</span>
        </div>
    );
}   

export default Checkbox;