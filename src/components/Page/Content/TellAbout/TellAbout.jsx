import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize';
import aboutLine from './img/about-line.png'


const TellAboutWrap = styled.section`
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
const TellAboutDescr = styled(Textarea)`
    width: 100%;
    background: transparent;
    background-image: url(${aboutLine});
    background-repeat: repeat-y;
    background-size: contain;
    background-position: 100% 1.3rem;
    border: none;
    outline: none;
    font-family: 'Courier New', serif;
    color: #231f20;
    font-size: 1.9rem;
    line-height: 3.75rem;
    overflow: hidden;
    min-height: 14.4rem;
    margin-top: 1rem;
    padding-left: 8px;
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
            <TellAboutDescr>
                Привлекла возможность работать удаленно, не&nbsp;тратя время на&nbsp;ежедневные поездки в&nbsp;офис.
                Также наслышан о&nbsp;надежности вашей компании. И&nbsp;самое главное, возможность повышать и&nbsp;развивать
                свои навыки в этой сфере, работая над проектами в&nbsp;команде.
            </TellAboutDescr>

        </TellAboutWrap>
    )
}

export default TellAbout;