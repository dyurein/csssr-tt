import React from 'react'
import styled from 'styled-components'
import checkboxImage from "./img/checkbox.png";
import checkmarkImage from './img/checked.png'
import {visibleHidden} from "../../../styles/helpers";


const CheckboxWrap = styled.div`
    margin-bottom: 17px;
`
const CheckboxLabel = styled.label`
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
    color: #000;
    user-select: none;
    margin-bottom: 9px;
    position: relative;
    padding-left: 26px;
    cursor: pointer;
    display: inline-block;
    &:last-child {
        margin-bottom: 0;
        width: 200px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border: none;
      background: url(${checkboxImage});
      background-position: center;
      background-size: cover;
    }
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: url(${checkmarkImage});
      background-position: center;
      background-size: cover;
      top: -6px;
      left: 1px;
      transition: all 0.2s ease;
    }
`

const CheckboxInput = styled.input`
    ${visibleHidden}

    &:not(:checked) + ${CheckboxLabel}::after {
        opacity: 0;
        transform: scale(0);
    }
    &:checked + ${CheckboxLabel}::after {
        opacity: 1;
        transform: scale(1);
    }
`


const Checkbox = ({name, id, children, defaultChecked, props}) => {
    return (
        <CheckboxWrap>
            <CheckboxInput {...props} name={name} id={id} type="checkbox" defaultChecked={defaultChecked}/>
            <CheckboxLabel for={id}>{children}</CheckboxLabel>
        </CheckboxWrap>

    )
}

export default Checkbox;
