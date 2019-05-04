import React from 'react'
import styled from 'styled-components'
import {visibleHidden} from "../../../styles/helpers";
import radioImage from "./img/radio.png";
import radioCheckmarkImage from "./img/radio-mark.png";


const RadioButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-right: 11px;
    &:last-child {
        margin-right: 0;
    }
`
const PlansLabel = styled.label`
    position: relative;
    padding-left: 36px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #000;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: -3px;
        width: 37px;
        height: 25px;
        border: none;
        background: url(${radioImage});
        background-position: center;
        background-size: cover;
    }
    &::after {
        content: '';
        position: absolute;
        width: 21px;
        height: 20px;
        background: url(${radioCheckmarkImage});
        background-position: center;
        background-size: cover;
        top: 3px;
        left: 8px;
        transition: all 0.2s ease;
    }
`
const PlansRadio = styled.input`
    ${visibleHidden}

    &:not(:checked) + ${PlansLabel}::after {
        opacity: 0;
        transform: scale(0);
    }
    &:checked + ${PlansLabel}::after {
        opacity: 1;
        transform: scale(1);
    }
`


const RadioButton = ({name, id, children, defaultChecked, props}) => {
    return (
        <RadioButtonWrap>
            <PlansRadio {...props} name={name} id={id} type="radio" defaultChecked={defaultChecked}/>
            <PlansLabel for={id}>{children}</PlansLabel>
        </RadioButtonWrap>

    )
}

export default RadioButton;
