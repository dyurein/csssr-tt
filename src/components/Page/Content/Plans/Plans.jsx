import React from 'react'
import styled from 'styled-components'
import RadioButton from "../../RadioButton/RadioButton";



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


const plansData = [
    {
        content: 'Верстать',
        active: false,
        id: 'plan_1',
        name: 'plan_radio_name'
    },
    {
        content: 'Прокачиваться в JS',
        active: true,
        id: 'plan_2',
        name: 'plan_radio_name'
    },
    {
        content: 'Менеджерство',
        active: false,
        id: 'plan_3',
        name: 'plan_radio_name'
    },
    {
        content: 'Другое',
        active: false,
        id: 'plan_4',
        name: 'plan_radio_name'
    }
]

const Plans = () => {
    return (
        <PlansWrap>
            <PlansTitle>Какие у вас планы на будущее?</PlansTitle>
            <PlansText>Этот ответ ни&nbsp;на&nbsp;что не&nbsp;повлияет. Не&nbsp;беда, если в&nbsp;будущем ваши планы поменяются.</PlansText>
            <PlansBlock>
                {plansData.map(({content, name, id, active}) =>
                    <RadioButton title="plan" name={name} id={id} defaultChecked={active}>{content}</RadioButton>
                )}
            </PlansBlock>
        </PlansWrap>
    )
}

export default Plans;