import React from 'react'
import styled from 'styled-components'
import Header from "./Header/Header";
import background_image from '../../images/background.jpg'
import Content from "./Content/Content";

const PageWrap = styled.body`
    background: #797979;
    width: 100%;
`
const Body = styled.div`
        font-family: "PTSans", sans-serif;
        margin: 0 auto;
        max-width: 1000px;
        color: #2f1b15;
        box-sizing: border-box;
        background: url(${background_image});
        padding-bottom: 70px;
`
export const Container = styled.div`
    max-width: 771px;
    margin: 0 auto;
`


const Page = () => {
    return (
        <PageWrap>
        <Body>
            <Header />
            <Content/>
        </Body>
        </PageWrap>
    )
}

export default Page;