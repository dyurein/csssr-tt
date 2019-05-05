import React from 'react'
import styled from 'styled-components'
import dateLine from './img/date-line.png'


const DateWrap = styled.section`
    display: flex;
    align-items: flex-end;
    margin-top: 91px;
`
const DateTitle = styled.h3`
    font-size: 20px;
    line-height: 49.83px;
    font-weight: bold;
    margin: 0;
`
const DateLine = styled.div`
    font-family: "Courier New", serif;
    font-size: 30px;
    line-height: 36px;
    color: #231f20;
    padding-right: 18px;
    display: inline-block;
    background: url(${dateLine}) repeat-x;
    background-size: contain;
    background-position: 0 13px;
    margin-left: 18px;
`
const DateData = styled.span`
    font-family: "Courier New", serif;
    font-size: 30px;
    line-height: 36px;
    color: #231f20;
    transform: translateY(-21px);
    text-indent: 13px;
    display: inline-block;
`



const Date = () => {
    return (
        <DateWrap>
            <DateTitle>Дата заполнения</DateTitle>
            <DateLine>
                <DateData>02.05.2019</DateData>
            </DateLine>
        </DateWrap>
    )
}

export default Date;