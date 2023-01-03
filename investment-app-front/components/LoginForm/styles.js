import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    padding-top: 10px;


    input:focus{
       outline: none;
    }

    button:hover{
        border: 3px solid #fff;
        color: #fff;
        cursor: pointer;
    }
`;

export const StyledInput = styled.input`
    margin-top: 30px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 20px;
    color: grey;
`;

export const StyledButton = styled.button`
    border: 2px solid grey;
    border-radius: 5px;
    color: grey;
    font-size: 25px;
    transition: 0.3s;
    margin-top: 20px;
`;