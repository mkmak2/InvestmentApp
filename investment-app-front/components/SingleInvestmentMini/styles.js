import styled from 'styled-components';

export const InvestmentBox = styled.div`
    width: 700px;
    display: flex;
    color: #F3EFE0;
    padding: 30px;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 10px;

    .actions{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        border-left: 2px solid #BF9742;
        margin-left: 20px;
    }

    button:hover{
        cursor: pointer;
        background-color: #191919;
    }

    .description{
        width: 70%;
    }
`;

export const StyledButton = styled.button`
    background-color: #434242;
    color: #BF9742;
    border-radius: 5px; 
    padding: 5px;
    font-weight: bold;
    border: none;
    transition: 0.5s;
`;  