import React from 'react'
import styled from 'styled-components'
import scaleLine from './img/scale.png'
import Short from './img/short.png'
import longLeft from './img/long-left.png'
import longRight from './img/long-right.png'
import Triangle from './img/triangle.png'
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
    background-image: url(${scaleLine});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 4rem;
    height: 75px;
`
const RangeLabels = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`
const RangeLabel = styled.label`
    font-size: 11px;
    font-weight: 700;
    line-height: 22px;
    position: relative;
    cursor: pointer;
    top: -17px;
    &:nth-of-type(3){
        line-height: 19px;
        right: 17px;
    }
    &::after {
        content: '';
        position: absolute;
        background: url(${Triangle});
        background-repeat: no-repeat;
        background-position: top center;
        top: -46px;
        left: 2px;
        width: 16px;
        height: 15px;
        
    }
    &::before {
        content: '';
        position: absolute;
        background-image: url(${Short});
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
            background-image: url(${longLeft});
            top: -28px;
            left: 4px;
            width: 16px;
            height: 26px;
        }
    }
    &:last-of-type {
        &::before {
            background-image: url(${longRight});
            top: -28px;
            left: auto;
            right: -3px;
            width: 16px;
            height: 26px;
        }
    }
    &:last-of-type {
        &::after {
            right: -6px;
            left: auto;
        }
    }

`
const RangeCheckbox = styled.input`
    ${visibleHidden}
    display: none;
    
    &:not(:checked) + ${RangeLabel}::after {
        opacity: 0;
        transform: scale(0);
        transition: all 0.2s ease;

    }
    &:checked + ${RangeLabel}::after {
        opacity: 1;
        transform: scale(1);
        transition: all 0.2s ease;
    }
`


const JsSkill = () => {
    return (
        <JsSkillWrap>
            <JsSkillTitle>Уровень владения JavaScript</JsSkillTitle>
            <RangeScale/>
            <RangeLabels>

                <RangeCheckbox type="radio" id="jsskill_1" name="jsskill"/>
                <RangeLabel htmlFor="jsskill_1">Не владею</RangeLabel>


                <RangeCheckbox type="radio" id="jsskill_2" name="jsskill" defaultChecked/>
                <RangeLabel htmlFor="jsskill_2">Использую готовые решения</RangeLabel>


                <RangeCheckbox type="radio" id="jsskill_3" name="jsskill"/>
                <RangeLabel htmlFor="jsskill_3">Использую готовые решения <br/> и умею их переделывать</RangeLabel>


                <RangeCheckbox type="radio" id="jsskill_4" name="jsskill"/>
                <RangeLabel htmlFor="jsskill_4">Пишу сложный JS с нуля</RangeLabel>
            </RangeLabels>
        </JsSkillWrap>
    )
}



export default JsSkill;