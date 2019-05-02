import React from 'react'
import styled from 'styled-components'
import checkbox from '../../images/checkbox.png'
import checked from '../../images/checked.png'

const SkillsCheckbox = styled.input`
    margin-right: 23px;
    &:not(:checked),
    &:checked {
         position: absolute;
         left: -9999px;
    }
    &:not(:checked) + label,
    &:checked + label {
         position: relative;
         padding-left: 25px;
         cursor: pointer;
    }
    &:not(:checked) + label:before,
    &:checked + label:before {
         content: '';
         position: absolute;
         background: url(${checkbox});
         left: 0;
         top: 2px;
         width: 20px;
         height: 18px;
    }
    &:not(:checked) + label:after,
    &:checked + label:after {
         content: '';
         position: absolute;
         background: url(${checked});
         top: 0;
         left: 0;
         width: 20px;
         height: 30px;
         line-height: 0.8;
         color: #161616;
         transition: all .2s;
    }
    &:not(:checked) + label:after {
         opacity: 0;
         transform: scale(0);
    }
    &:checked + label:after {
         opacity: 1;
         transform: scale(1);
    }
`


const Checkbox = () => {
    return (
        <SkillsCheckbox
            checked="false"
            onChange
            type="checkbox"
            id="SKills"
            value=""
            name="SkillsCheckbox"
        />
    )
}

export default Checkbox;