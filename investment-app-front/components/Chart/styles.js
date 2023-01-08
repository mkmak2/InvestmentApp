import styled from 'styled-components';

export const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;

    .close{
        position: relative;
        width: 30px;
        height:30px;
        background-color: rgba(60, 60, 61, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: grey;
        transition: 0.2s;
        border-radius: 5px;
    }

    .close:hover{
        cursor: pointer;
        color: white;
    }
`;