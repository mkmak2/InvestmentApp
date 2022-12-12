import styled from 'styled-components';

export const StyledSlider = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    width:800px;
    height: 470px;
    position: relative;

    button{
        transition: 0.2s;
    }

    button:hover{
        font-size: 50px;
        cursor: pointer;
    }
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: #6c757d;
    top: 50%;
    position: absolute;
    transform: translate(0, -50%);
    font-size: 30px;
`;

export const Description =  styled.div`
    align-items: left;
    width: 100%;
    padding: 10px;
`;