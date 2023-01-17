import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainContainer = styled.div`
	position: absolute;
	display: flex;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(135deg, black 30%, #3b3b3b);

`;  


export const LeftPanel = styled.div`
	position: relative;
	width: 60%;
	height: 100%;
	background: linear-gradient(135deg, black 30%, #3b3b3b);

    .form-box{
        position: absolute;
        left: 100px;
        top: 150px;
        width: 700px;
        height: 400px;
        display: flex;
        justify-content: space-evenly;
        color: #fff;


        .line{
            position: relative;
            margin-top: 20px;
            margin-bottom: 20px;
            width: 3px;
            background-color: #E6B325;
        }   
    }
`;

export const RightPanel = styled.div`
	position: relative;
	width: 40%;
	height: 100%;
	background-image: url('mainImage.jpg');
	background-size: cover;
	background-position: bottom;

`;

export const UserPanel = styled.div`
    width: 80%;
    height: 80%;
    position: relative;
    left: 150px;
    top: 150px;
    display: flex;
    flex-direction: column;
    color: white;

    h1{
        font-size: 60px;
    }

    h1 span{
        color: #E6B325;
    }

    .inv-box{
        display: flex;
        flex-wrap: wrap;
        max-width: 50%;
    }

    .single-inv{
        width: 100px;;
        height: 30px;
        font-size: 18px;
        background-color: rgb(24, 29, 49, 0.3);
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: grey;
        transition: 0.2s;


        &:hover{
            color: white;
        }

        span:hover{
            cursor: pointer;
            color: #E6B325;
        }
    }

    .add-more{
        margin-top: 50px;
        span{
            display: block;
        }

        button{
            margin-top: 20px;
        }
    
    } 

    button{
        border: 2px solid grey;
        color: grey;
        border-radius: 5px;
        font-size: 20px;
        padding: 3px 5px 3px 5px;
        margin-top: 50px;
        transition: 0.2s;

        &:hover{
            color: white;
            border: 3px solid white;
            cursor: pointer;
        }
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    &:hover{
        color: #E6B325;
        cursor: pointer;    
    }
`;