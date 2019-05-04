import React from 'react'
import styled from 'styled-components'
import radio from '../../../../images/radio.png'
import radio_mark from '../../../../images/radio-mark.png'
import {visibleHidden} from "../../../../styles/helpers";



const PlansWrap = styled.div`
    margin-top: 48px;
`
const PlansTitle = styled.h2`
    font-size: 21px;
    line-height: 49.83px;
    font-weight: bold;
    margin: 0;
`
const PlansText = styled.p`
    font-size: 15px;
    line-height: 23px;
    color: #3d3d3d;
    margin: 0;
`
const PlansBlock = styled.div`
    display: flex;
    margin-top: 15px;
`

const Plan = styled.div`
    display: flex;
    align-items: center;
    margin-right: 11px;
    &:last-child {
        margin-right: 0;
    }
`
const PlansRadio = styled.input`
    ${visibleHidden}
    
    &:checked + label::before,
    &:not(:checked) + label::before {
        content: '';
        position: absolute;
        left: 0;
        top: -3px;
        width: 37px;
        height: 25px;
        border: none;
        background: url(${radio});
        background-position: center;
        background-size: cover;
    }
    &:checked + label::after,
    &:not(:checked) + label::after {
        content: '';
        position: absolute;
        width: 21px;
        height: 20px;
        background: url(${radio_mark});
        background-position: center;
        background-size: cover;
        top: 3px;
        left: 8px;
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
const PlansLabel = styled.label`
    position: relative;
    padding-left: 36px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #000;
`


const Plans = () => {
    return (
        <PlansWrap>
            <PlansTitle>Какие у вас планы на будущее?</PlansTitle>
            <PlansText>Этот ответ ни&nbsp;на&nbsp;что не&nbsp;повлияет. Не&nbsp;беда, если в&nbsp;будущем ваши планы поменяются.</PlansText>
            <PlansBlock>
                <Plan>
                    <PlansRadio type="radio" id="plan1" name="plan"/>
                    <PlansLabel for="plan1">Верстать</PlansLabel>
                </Plan>
                <Plan>
                    <PlansRadio type="radio" id="plan2" name="plan" defaultChecked/>
                    <PlansLabel for="plan2">Прокачиваться в JS</PlansLabel>
                </Plan>
                <Plan>
                    <PlansRadio type="radio" id="plan3" name="plan"/>
                    <PlansLabel for="plan3">Менеджерство</PlansLabel>
                </Plan>
                <Plan>
                    <PlansRadio type="radio" id="plan4" name="plan"/>
                    <PlansLabel for="plan4">Другое</PlansLabel>
                </Plan>
            </PlansBlock>
        </PlansWrap>
    )
}

export default Plans;