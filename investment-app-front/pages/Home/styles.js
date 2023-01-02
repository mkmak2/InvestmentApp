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

	.header {
		position: relative;
		left: 100px;
		top: 20px;
		color: #fff;

		p {
			margin-top: ${props => props.distance}px;
			margin-bottom: ${props => props.distance}px;
			transition: 1s;
		}
	}

	.line {
		position: relative;
		background-color: #E6B325;
		height: 3px;
		width: 800px;
		left: 50%;
		transform: translate(-50%, 0);
		top: 5%;
	}

	.description {
		position: relative;
		left: 100px;
		top: 20%;
		color: ${props => props.display};
		line-height: 25px;
		width: 600px;
		text-align: justify;
		transition: 1s;
	}

    .slider{
        position: absolute;
        width: 90%;
        height: 450px;
        background-color: red;
        left: 5%;
        bottom: 10px;
    }

	.icon {
		position: absolute;
		left: 50px;
		bottom: ${props => props.position}px;
		width: 40px;
		height: 40px;
		color: #E6B325;
		font-size: 30px;
		transition: 1s;
		transform: rotate(${props => props.rotate}deg);
	}

	.icon:hover {
		cursor: pointer;
	}
`;

export const RightPanel = styled.div`
	position: relative;
	width: 40%;
	height: 100%;
	background-image: url('mainImage.jpg');
	background-size: cover;
	background-position: bottom;

	.button-box {
		position: relative;
		left: 50%;
		top: 420px;
		transform: translate(-50%, 0%);
		color: #fff;
		font-size: 20px;
		width: 300px;
		height: 200px;
		text-align: center;
		padding: 10px;

		button:hover {
			width: 40%;
			height: 40px;
			font-size: 10px;
			cursor: pointer;
		}
	}
`;

export const StyledButton = styled.button`
	width: 50%;
	height: 50px;
	border: none;
	background-color: #3b3b3b;
	color: #E6B325;
	border-radius: 20px;
	font-size: 15px;
	margin-top: 10px;
	transition: 0.5s; ;
`;
