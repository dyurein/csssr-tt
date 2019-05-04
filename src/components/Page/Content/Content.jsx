import React from 'react'
import styled from 'styled-components'
import {Container} from '../Page';
import titleImage from './img/title.png'
import MainDescr from "./MainDescr/MainDescr";
import AboutSkills from "./AboutSkills/AboutSkills";
import JsSkill from "./JsSkill/JsSkill";
import TellAbout from "./TellAbout/TellAbout";
import Plans from "./Plans/Plans";
import Date from "./Date/Date";

const ContentWrap = styled.main`
`
const ContentInner = styled.div`
    display: flex;
    flex-direction: column;
`
const TitleWrap = styled.h1`
    display: flex;
    justify-content: center;
    margin: 0;
`
const Title = styled.img`
    margin-left: -33px;
    margin-top: -5px;
`

const Content = () => {
    return (
        <ContentWrap>
            <Container>
                <ContentInner>
                    <TitleWrap>
                        <Title src={titleImage}/>
                    </TitleWrap>
                    <MainDescr />
                    <AboutSkills/>
                    <JsSkill />
                    <TellAbout/>
                    <Plans />
                    <Date />
                </ContentInner>
            </Container>
        </ContentWrap>

    )
}

export default Content;