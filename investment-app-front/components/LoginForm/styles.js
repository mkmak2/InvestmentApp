import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    padding-top: 10px;
    text-align: left;
    color: grey;


    input:focus{
       outline: none;
    }

    button:hover{
        border: 3px solid #fff;
        color: #fff;
        cursor: pointer;
    }

    .show{
        text-align: right;
        height: 0;

        #icon{
            position: relative;
            top: -45px;
            color: ${props => props.color}
        }

        #icon:hover{
            cursor: pointer;
        }
    }

    #error{
        font-size: 10px;
        color: #E6B325;
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