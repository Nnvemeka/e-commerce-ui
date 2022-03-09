import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
    height: 60px;
    margin-bottom: 15px;
`
const Wrapper = styled.div`
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
// Left navbar starts
const Left = styled.div`
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`


// Right navbar starts
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>PRIME.</Logo>
                </Left>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                       <FontAwesomeIcon icon={faCartShopping} />
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar