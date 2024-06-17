import React from "react";
import styled, { css } from "styled-components";
import {lighten, darken} from 'polished';

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: ${props => props.color || 'black'};
    border-radius: 50%;
    ${props => 
        props.huge && 
        css`            /* css는 styled-components에서 불러온 모듈 */
        width: 10rem;
        height: 10rem;
    `}
`;

export default Circle;