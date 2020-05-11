import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <Title>레시피 북</Title>
        </>
    )
}

const Title = styled.h1`
text-align: center;
margin-top: 20px;
font-size: 3rem;
color:green;
margin-bottom: 0;
`

export default Header;