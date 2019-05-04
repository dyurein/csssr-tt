import React from 'react'
import styled from 'styled-components'
import Line from './img/line2.png'


const Contacts = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 66px;
`
const LineDescr = styled.div`
    display: flex;
    margin-bottom: 22px;
    &:last-child {
        margin-bottom: 0;
    }
    
`
const CommonLabel = styled.span`
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
`
const CommonDescr = styled.div`
    margin-left: 17px;
    background: url(${Line}) repeat-x;
    background-size: contain;
    background-position: 0 23px;
    flex-grow: 1;
    
`
const Descr = styled.span`
    font-family: "Courier New", serif;
    font-size: 30px;
    line-height: 36px;
    color: #231f20;
    text-indent: 19px;
    transform: translateY(-13px);
    display: inline-block;
`


const MainDescr = () => {
    return (
        <Contacts>
            <LineDescr>
                <CommonLabel>Полное ФИО</CommonLabel>
                <CommonDescr>
                    <Descr>Гапонов Сергей Сергеевич</Descr>
                </CommonDescr>
            </LineDescr>
            <LineDescr>
                <CommonLabel>Год рождения</CommonLabel>
                <CommonDescr>
                    <Descr>1995</Descr>
                </CommonDescr>
            </LineDescr>
            <LineDescr>
                <CommonLabel>Место жительства</CommonLabel>
                <CommonDescr>
                    <Descr>г. Волгоград, Россия</Descr>
                </CommonDescr>
            </LineDescr>
            <LineDescr>
                <CommonLabel>Скайп</CommonLabel>
                <CommonDescr>
                    <Descr>marsch714</Descr>
                </CommonDescr>
            </LineDescr>
            <LineDescr>
                <CommonLabel>Почта</CommonLabel>
                <CommonDescr>
                    <Descr>epcijer@gmail.com</Descr>
                </CommonDescr>
            </LineDescr>
        </Contacts>

    )
}

export default MainDescr;