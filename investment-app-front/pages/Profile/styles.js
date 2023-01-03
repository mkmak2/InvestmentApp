import styled from 'styled-components';

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