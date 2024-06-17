import React from "react";
import styled from "styled-components";
import Button from "./Button";

const DarkBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    outline: 0;
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1.125rem;
    }
`;  

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;

function Dialog({ title, children, confirmText = "Confirm", cancelText = "Cancel" }) {
    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button color='gray'>{cancelText}</Button>
                    <Button color='pink'>{confirmText}</Button>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>  
    );
}

export default Dialog;
