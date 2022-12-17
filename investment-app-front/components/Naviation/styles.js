import styled from 'styled-components';
import Link from 'next/link';

export const StyledNavbar = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 20px;
    padding: 10px;
    margin-top: 30px;

    a:hover{
        color: #BF9742;
    }
`;

export const StyledLink = styled(Link)`
    background-color: transparent;
    color: #B2B2B2;
    margin-bottom: 10px;
    transition: 0.3s;
    padding-top: 10px;
`;