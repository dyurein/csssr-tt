import React from 'react'
import styled from 'styled-components'
import about_line from '../../../../images/about-line.png'


const TellAboutWrap = styled.div`
    margin-top: 3px;
`
const TellAboutTitle = styled.h2`
    font-size: 21px;
    line-height: 49.83px;
    font-weight: bold;
    margin: 0;
`
const TellAboutText = styled.p`
    font-size: 15px;
    line-height: 23px;
    color: #3d3d3d;
    margin: 0;
`
const TellAboutDescr = styled.div`
    width: 100%;
    background: transparent;
    background-image: url(${about_line});
    background-repeat: repeat-y;
    background-size: 100% 3.75rem;
    background-position: 100% 1.5rem;
    border: none;
    outline: none;
    font-family: 'Courier New', serif;
    color: #231f20;
    font-size: 1.9rem;
    line-height: 3.75rem;
    overflow: hidden;
    min-height: 14.4rem;
    margin-top: 1.4rem;
`



const TellAbout = () => {
    return (
        <TellAboutWrap>
            <TellAboutTitle>Расскажите о себе словами</TellAboutTitle>
            <TellAboutText>
                Напишите пару предложений, чем вас привлекла наша вакансия и&nbsp;чего вы&nbsp;ожидаете
                от&nbsp;работы в&nbsp;CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут
                добавляться автоматически.
            </TellAboutText>
            <TellAboutDescr contentEditable="true">
                Привлекла возможность работать удаленно, не&nbsp;тратя время на&nbsp;ежедневные поездки в&nbsp;офис.
                Также наслышан о&nbsp;надежности вашей компании. И&nbsp;самое главное, возможность повышать и&nbsp;развивать
                свои навыки в этой сфере, работая над проектами в&nbsp;команде.
            </TellAboutDescr>

        </TellAboutWrap>
    )
}

export default TellAbout;