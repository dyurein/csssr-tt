import React from 'react'
import styled from 'styled-components'
import scale from '../../../../images/scale.png'
import short from '../../../../images/short.png'
import long_left from '../../../../images/long-left.png'
import long_right from '../../../../images/long-right.png'
import triangle from '../../../../images/triangle.png'



const JsSkillWrap = styled.div`
    margin-top: 30px;
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
    background-image: url(${scale});
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
const RangeLabel = styled.span`
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
        top: -25px;
        left: 0;
        width: 21px;
        height: 15px;
    }
    &::after {
        content: '';
        position: absolute;
        background-image: ${props => props.triangle ? `url(${triangle})` : `url()`};
        background-repeat: no-repeat;
        background-position: top center;
        top: -46px;
        left: 92%;
        width: 16px;
        height: 15px;
    }
    
    &:first-child {
        &::before {
            content: '';
            position: absolute;
            background-image: url(${long_left});
            background-repeat: no-repeat;
            background-position: top center;
            background-size: contain;
            top: -28px;
            left: 2px;
            width: 16px;
            height: 26px;
        }
    }
    &:last-child {
        &::before {
            content: '';
            position: absolute;
            background-image: url(${long_right});
            background-repeat: no-repeat;
            background-position: top center;
            background-size: contain;
            top: -28px;
            left: auto;
            right: -3px;
            width: 16px;
            height: 26px;
        }
    }
    
`


const JsSkill = () => {
    return (
        <JsSkillWrap>
            <JsSkillTitle>Уровень владения JavaScript</JsSkillTitle>
            <RangeScale />
            <RangeLabels>
                <RangeLabel>Не владею</RangeLabel>
                <RangeLabel>Использую готовые решения</RangeLabel>
                <RangeLabel triangle>Использую готовые решения <br/> и умею их переделывать</RangeLabel>
                <RangeLabel>Пишу сложный JS с нуля</RangeLabel>
            </RangeLabels>
        </JsSkillWrap>
    )
}

export default JsSkill;