import React from 'react'
import styled from 'styled-components'
import scale_line from '../../../../images/scale.png'
import short from '../../../../images/short.png'
import long_left from '../../../../images/long-left.png'
import long_right from '../../../../images/long-right.png'
import triangle from '../../../../images/triangle.png'
import {visibleHidden} from "../../../../styles/helpers";


const JsSkillWrap = styled.div`
    margin-top: 21px;
`
const JsSkillTitle = styled.h2`
    font-size: 21px;
    line-height: 49.83px;
    font-weight: bold;
    margin: 0;
`
const RangeScale = styled.div`
    display: flex;
    width: 100%;
    background-image: url(${scale_line});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 4rem;
    position: relative;
    height: 75px;
`
const RangeLabels = styled.div`
    display: flex;
    justify-content: space-between;
`
const RangeLabel = styled.label`
    font-size: 11px;
    font-weight: 700;
    line-height: 22px;
    position: relative;
    cursor: pointer;
    top: -17px;
    &:nth-child(3){
        line-height: 19px;
        right: 17px;
    }
    &::before {
        content: '';
        position: absolute;
        background-image: url(${short});
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
        top: -26px;
        left: 0;
        width: 21px;
        height: 15px;
    }
    &:first-of-type {
        &::before {
            background-image: url(${long_left});
            top: -28px;
            left: 4px;
            width: 16px;
            height: 26px;
        }
    }
    &:last-of-type {
        &::before {
            background-image: url(${long_right});
            top: -28px;
            left: auto;
            right: -3px;
            width: 16px;
            height: 26px;
        }
    }

`
const RangeCheckbox = styled.input`
    ${visibleHidden}


    &:checked + label::after,
    &:not(:checked) + label::after {
        content: '';
        position: absolute;
        background: url(${triangle});
        background-repeat: no-repeat;
        background-position: top center;
        top: -46px;
        left: 2px;
        width: 16px;
        height: 15px;
        transition: all 0.2s ease;
    }
    &:last-of-type {
        &:checked + label::after,
        &:not(:checked) + label::after {
            right: -6px;
            left: auto;

        }
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


const JsSkill = () => {
    return (
        <JsSkillWrap>
            <JsSkillTitle>Уровень владения JavaScript</JsSkillTitle>
            <RangeScale/>
            <RangeLabels>

                <RangeCheckbox type="radio" id="skill_1" name="jsskill"/>
                <RangeLabel for="skill_1">Не владею</RangeLabel>


                <RangeCheckbox type="radio" id="skill_2" name="jsskill" defaultChecked/>
                <RangeLabel for="skill_2">Использую готовые решения</RangeLabel>


                <RangeCheckbox type="radio" id="skill_3" name="jsskill"/>
                <RangeLabel for="skill_3">Использую готовые решения <br/> и умею их переделывать</RangeLabel>


                <RangeCheckbox type="radio" id="skill_4" name="jsskill" last/>
                <RangeLabel for="skill_4">Пишу сложный JS с нуля</RangeLabel>
            </RangeLabels>
        </JsSkillWrap>
    )
}



export default JsSkill;