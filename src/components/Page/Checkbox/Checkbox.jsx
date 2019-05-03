import React from 'react'
import styled, {css} from 'styled-components'
import checkbox from "../../../images/checkbox.png";
import checkbox_checked from '../../../images/checked.png'


const CheckboxWrap = styled.div`
    margin-bottom: 17px;
`
const CheckboxLabel = styled.label`
    font-size: 21px;
    font-weight: bold;
    line-height: 25px;
    color: #000;
    user-select: none;
    margin-bottom: 9px;
    position: relative;
    padding-left: 25px;
    &:last-child{
        margin-bottom: 0;
        width: 200px;
    }

    ${props => props.active && css`{
        border: 1px solid red
        &::before {
            background-color: #000;
        }
    `}
`
const CheckboxInput = styled.input`
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    
    &:checked + label,
    &:not(:checked) + label {
        position: relative;
        padding-left: 26px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: #000;
    }
    &:checked + label::before,
    &:not(:checked) + label::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: none;
        background: url(${checkbox});
        background-position: center;
        background-size: cover;
    }
    &:checked + label::after,
    &:not(:checked) + label::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: url(${checkbox_checked});
        background-position: center;
        background-size: cover;
        top: -6px;
        left: 1px;
        transition: all 0.2s ease;
    }
    &:not(:checked) + label::after {
        opacity: 0;
        transform: scale(0);
    }
    &:checked + label::after {
        opacity: 1;
        transform: scale(1);
    }
`


const Checkbox = ({name, children, defaultChecked}) => {
    return (
        <CheckboxWrap>
            <CheckboxInput name={name} type="checkbox" defaultChecked={defaultChecked}/>
            <CheckboxLabel>{children}</CheckboxLabel>
        </CheckboxWrap>

    )
}

export default Checkbox;