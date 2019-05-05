import React from 'react'
import styled from 'styled-components'
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
        active: true,
        id: 'skill_1'
    },
    {
        content: 'Pug (Jade)',
        active: true,
        id: 'skill_2'
    },
    {
        content: 'Stylus/LESS/SASS',
        active: true,
        id: 'skill_3'
    },
    {
        content: 'Работаю с SVG',
        active: false,
        id: 'skill_4'
    },
    {
        content: 'Верстаю семантично',
        active: true,
        id: 'skill_5'
    },
    {
        content: 'Accessibility (A11Y)',
        active: true,
        id: 'skill_6'
    },
    {
        content: 'ES2015/ES2016',
        active: false,
        id: 'skill_7'
    },
    {
        content: 'Gulp/GRUNT',
        active: true,
        id: 'skill_8'
    },
    {
        content: 'Webpack',
        active: false,
        id: 'skill_9'
    },
    {
        content: 'Дружу с WebGL',
        active: false,
        id: 'skill_10'
    },
    {
        content: 'jQuery',
        active: true,
        id: 'skill_11'
    },
    {
        content: 'Знаю/изучаю Angular',
        active: false,
        id: 'skill_12'
    },
    {
        content: 'Знаю/изучаю React',
        active: true,
        id: 'skill_13'
    },
    {
        content: 'Знаю/изучаю Node.js',
        active: false,
        id: 'skill_14'
    },
    {
        content: 'Использую Git',
        active: true,
        id: 'skill_15'
    },
    {
        content: 'С глазомером всё ок',
        active: true,
        id: 'skill_16'
    },
    {
        content: <>Читаю <InnerLink href="http://blog.csssr.ru" target="_blank" rel="noreferrer nofollow">blog.csssr.ru</InnerLink></>,
        active: true,
        id: 'skill_17'
    },
    {
        content: 'Я ленивый(-ая)',
        active: false,
        id: 'skill_18'
    },
    {
        content: 'У меня хороший английский',
        active: true,
        id: 'skill_19'
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
                {skillsData.map(({content, id, active}) =>
                    <Checkbox title="skill" id={id} defaultChecked={active}>{content}</Checkbox>
                )}
            </Skills>
        </AboutSkillsWrap>
    )
}

export default AboutSkills;