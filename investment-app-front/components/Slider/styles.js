import styled from 'styled-components';

export const StyledSlider = styled.div`
    position: absolute;
    width: 90%;
    height: 450px;
    left: 5%;
    bottom: 10px;
    color: ${props => props.whiteColor};
    

    .title{
        position: absolute;
        width: 300px;
        left: 50px;
        top: 30px;
        transition: 1s;

        h1{
            margin-top: 0;
        }
    }

    .info{
        position: absolute;
        width: 400px;
        left: 50px;
        top: 180px;
        padding-top: 10px;
        transition: 1s;
    }

    .photo{
        position: absolute;
        width: 250px;
        height: 250px;
        left: 500px;
        top: 120px;
        font-size: 200px;
        color: ${props => props.yellowColor};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 1s;
    }

    .panel{
        position: absolute;
        width: 200px;
        height: 50px;
        left: 50%;
        bottom: 10px;
        transform: translate(-50%,0);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;

        .panelSingle:nth-child(${props => props.active}){
            width: 15px;
            height: 15px;
        }


        .panelCounter{
            width: 100px;
            height: 40%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .panelSingle{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: ${props => props.yellowColor};
            transition: 1s;
        }

        span{
            transition: 1s;
            display: block;
        }

        span:hover{
            cursor: pointer;
        }
    }
`;