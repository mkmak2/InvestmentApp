import Navigation from '../../components/Naviation';
import { MainContainer, LeftPanel, RightPanel, StyledButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Slider from '../../components/Slider';
import Link from 'next/link';

const Home = () => {
	const [mode, setMode] = useState(true);
	const [displayMode, setDisplayMode] = useState(true);

	const handleClick = () => {
		setMode(!mode);
		setTimeout(() => setDisplayMode(!displayMode), 1000);
	};

	//zmiany stylów dla opisu
	const distance = mode ? 50 : 0;
	const display = mode ? '#fff' : 'transparent';
	const rotate = mode ? '0' : '180';
	const position = mode ? '50' : '480';
	
	//zmiany stylów dla slidera
	const whiteColor = mode ? 'transparent' : '#fff';
	const yellowColor = mode ? 'transparent' : '#E6B325';

	return (	
		<MainContainer>
			<LeftPanel
				distance={distance}
				display={display}
				rotate={rotate}
				position={position}>
				<div className='header'>
					<p style={{ fontSize: 50 }}>Find your future</p>
					<p style={{ fontSize: 70, color: ' #E6B325' }}>Investment</p>
				</div>
				<div className='line'></div>
				{displayMode ? (
					<div className='description'>
						Our app is a place where the most attractive investment offers are
						stored. We share you, a common ways to find an investment that fit
						you. To choose the perfect one, and be sure of your choice, you can
						also compare diffrent investments, read about company and watch how
						price was changing for years.
					</div>
				) : (
					<Slider whiteColor={whiteColor} yellowColor={yellowColor}/>
				)}

				<div className='icon' onClick={handleClick}>
					<FontAwesomeIcon icon={faCircleUp} />
				</div>
			</LeftPanel>
			<RightPanel>
				<Navigation />
				<div className='button-box'>
					One app,
					<br /> to find them all...
					<Link href='/Investments'><StyledButton>Explore</StyledButton></Link>
				</div>
			</RightPanel>
		</MainContainer>
	);
};

export default Home;
