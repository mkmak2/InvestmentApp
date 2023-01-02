import styled from 'styled-components';

export const Investment = styled.div`
	border-radius: 15px;
	width: 400px;
	height: 300px;
	background-color: rgba(34, 34, 34, 0.8);
    margin-top: 50px;
    color: #fff;
    padding: 10px;
    position: relative;

    .name{
        color: #E6B325;
        font-size: 20px;
        border-bottom: 1px solid #E6B325;
        padding-bottom: 5px;
    }

    .info{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        span{
            display: block;
            width: 40%;
            margin-top: 20px;
        }

        p{
            margin-top: 0;
            color: grey;
        }
    }
`;

export const StyledButton = styled.div`
    position: relative;
    width: 30%;
    height: 20px;
    border-radius: 10px;
    background-color: #E6B325;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    color: black;
`;
