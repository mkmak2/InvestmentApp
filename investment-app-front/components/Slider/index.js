import { useState } from 'react';
import { StyledSlider } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMagnifyingGlassDollar,
	faCaretLeft,
	faCaretRight,
	faChartSimple,
	faCalculator,
	faBook,
} from '@fortawesome/free-solid-svg-icons';

const Slider = ({ whiteColor, yellowColor }) => {
	const [counter, setCounter] = useState(0);

	const option = [
		{
			title: 'Search investments',
			info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, facere ad aut ut officia pariatur temporibus molestias modi id ipsum fugit, voluptate porro, laborum quasi rem quae eius nostrum eos.',
			icon: faMagnifyingGlassDollar,
		},
		{
			title: 'Compare charts',
			info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, facere ad aut ut officia pariatur temporibus molestias modi id ipsum fugit, voluptate porro, laborum quasi rem quae',
			icon: faChartSimple,
		},
		{
			title: 'Predict Price',
			info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, facere ad aut ut officia pariatur temporibus molestias modi id ipsum fugit, voluptate porro, laborum quasi rem quae eius nostrum eos.gwergerwgqegbearvdfsbsnwtnwthqgqtw	qtwrfqw',
			icon: faCalculator,
		},
		{
			title: "Learn about company's history",
			info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, facere ad aut ut officia pariatur temporibus molestias modi id ipsum fugit, voluptate porro, laborum quasi rem quae eius nostrum eos.bqibffoiebfqefewgf',
			icon: faBook,
		},
	];

	const handleSwap = side => {
		if (side) {
			if (counter < option.length - 1) setCounter(counter + 1);
			else setCounter(0);
		} else {
			if (counter > 0) setCounter(counter - 1);
			else setCounter(option.length - 1);
		}
	};

	const active = option[counter];

	return (
		<StyledSlider active={counter+1} whiteColor={whiteColor} yellowColor={yellowColor}>
			<div className='title'>
				<h1>{active.title}</h1>
			</div>
			<div className='info'>{active.info}</div>
			<div className='photo'>
				<FontAwesomeIcon icon={active.icon} />
			</div>
			<div className='panel'>
				<span onClick={() => handleSwap(0)}>
					<FontAwesomeIcon icon={faCaretLeft} />
				</span>
				<div className='panelCounter'>
					<div className='panelSingle'></div>
					<div className='panelSingle'></div>
					<div className='panelSingle'></div>
					<div className='panelSingle'></div>
				</div>
				<span onClick={() => handleSwap(1)}>
					<FontAwesomeIcon icon={faCaretRight} />
				</span>
			</div>
		</StyledSlider>
	);
};

export default Slider;
