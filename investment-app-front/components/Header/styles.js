import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: 500px;
    width: 100%;
    background-image: url(header.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledTitle = styled.div`
    height: 300px;
    margin-top: 100px;
    margin-left: 20px;
    font-size: 50px;
    color: #BF9742;
    font-family: Arial;
    background-color: transparent;

    span{
        background-color:transparent;
        font-size: 70px;
    }

    p{
        background-color: transparent;
        font-size: 40px;
    }
`