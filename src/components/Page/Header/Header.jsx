import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logo.png'
import stamp_image from '../../../images/stamp.png'
import {Container} from "../Page";

const HeaderWrap = styled.header`
    padding-top: 50px;
`
const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoWrap = styled.div`
   
`
const Logo = styled.img`
    margin-top: -25px;
`
const StampWrap = styled.div`
    margin-right: -63px;
`
const Stamp = styled.img`
`

const Header = () => {
    return (
        <HeaderWrap>
            <Container>
                <HeaderInner>
                    <LogoWrap>
                        <Logo src={logo}/>
                    </LogoWrap>
                    <StampWrap>
                        <Stamp src={stamp_image}/>
                    </StampWrap>
                </HeaderInner>
            </Container>
        </HeaderWrap>

    )
}

export default Header;