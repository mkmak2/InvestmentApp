import styled from 'styled-components';
import Link from 'next/link';

export const StyledNavbar = styled.div`
	box-sizing: border-box;
	position: fixed;
	width: ${props => props.width}px;
	height: 50px;
	font-size: 15px;
	text-transform: uppercase;
	color: #fff;
	right: 110px;
	top: 20px;
	background: rgba(254, 254, 254, 0.03);
	border-radius: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: 0.5s;
	transition-delay: ${props => props.delayWidth}s;
	z-index: 1;

	span {
		transition: 0.5s;
		color: ${props => props.color};
		visibility: ${props => props.visibility};
		transition-delay: ${props => props.delayColor}s;
	}

	p {
		transition: font-size 0.5s;
	}

	p:hover {
		font-size: 18px;
	}
`;

export const NavbarButton = styled.div`
	width: 50px;
	height: 50px;
	background: rgba(254, 254, 254, 0.03);
	position: fixed;
	display: flex;
	right: 50px;
	top: 20px;
	border-radius: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	font-size: 20px;

	span {
		transition: 0.5s;
	}

	span:hover {
		font-size: 22px;
		cursor: pointer;
	}
`;
