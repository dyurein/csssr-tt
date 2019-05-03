import React from 'react'
import styled, {css} from 'styled-components'

import Checkbox from "../../Checkbox/Checkbox";


const AboutSkillsWrap = styled.div`
    margin-top: 48px;
`
const AboutSkillsTitle = styled.h2`
    font-size: 21px;
    line-height: 49.83px;
    font-weight: bold;
    margin: 0;
`
const AboutSkillsText = styled.p`
    font-size: 15px;
    line-height: 23px;
    color: #3d3d3d;
    margin: 0;
`
const Skills = styled.div`
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 260px;
    align-content: space-between;
`

const InnerLink = styled.a`
    color: #1f5f97;
    &:visited {
        color: #1f5f97;
    }
`


const skillsData = [
    {
        content: 'БЭМ/OOCSS',
        active: true
    },
    {
        content: 'Pug (Jade)',
        active: true
    },
    {
        content: 'Stylus/LESS/SASS',
        active: true
    },
    {
        content: 'Работаю с SVG',
        active: false
    },
    {
        content: 'Верстаю семантично',
        active: true
    },
    {
        content: 'Accessibility (A11Y)',
        active: true
    },
    {
        content: 'ES2015/ES2016',
        active: false
    },
    {
        content: 'Gulp/GRUNT',
        active: true
    },
    {
        content: 'Webpack',
        active: false
    },
    {
        content: 'Дружу с WebGL',
        active: false
    },
    {
        content: 'jQuery',
        active: true
    },
    {
        content: 'Знаю/изучаю Angular',
        active: false
    },
    {
        content: 'Знаю/изучаю React',
        active: true
    },
    {
        content: 'Знаю/изучаю Node.js',
        active: false
    },
    {
        content: 'Использую Git',
        active: true
    },
    {
        content: 'С глазомером всё ок',
        active: true
    },
    {
        content: <>Читаю <InnerLink href="http://blog.csssr.ru" target="_blank" rel="noreferrer nofollow">blog.csssr.ru</InnerLink></>,
        active: true
    },
    {
        content: 'Я ленивый(-ая)',
        active: false
    },
    {
        content: 'У меня хороший английский',
        active: true
    },
]

const AboutSkills = () => {
    return (
        <AboutSkillsWrap>
            <AboutSkillsTitle>Расскажите о себе чекбоксами</AboutSkillsTitle>
            <AboutSkillsText>Отметьте чекбоксами пункты, которые соответствуют вашим скиллам.
                Кстати, отсутствие опыта не&nbsp;означает, что у&nbsp;вас меньше шансов стать одним из&nbsp;наших
                товарищей. Это означает, что вы&nbsp;будете получать те&nbsp;задачи, с&nbsp;которыми гарантировано
                будете справляться.
            </AboutSkillsText>
            <Skills>
                {skillsData.map(({content, active}) =>
                    <Checkbox title="skill" defaultChecked={active}>{content}</Checkbox>
                )}
            </Skills>
        </AboutSkillsWrap>
    )
}

export default AboutSkills;