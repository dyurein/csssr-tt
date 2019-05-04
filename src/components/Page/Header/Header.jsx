import React from 'react'
import styled from 'styled-components'
import logoImage from './img/logo.png'
import stampImage from './img/stamp.png'
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
                        <Logo src={logoImage} alt="Logo"/>
                    </LogoWrap>
                    <StampWrap>
                        <Stamp src={stampImage} alt="Stamp"/>
                    </StampWrap>
                </HeaderInner>
            </Container>
        </HeaderWrap>

    )
}

export default Header;