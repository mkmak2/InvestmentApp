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
			info: "You can explore a lot of investments from diffrent sectors and exchanges. You can also choose specyfic sector, industry or exhange which match your preferences to filter list of investemnts. Our database is still updating so don't worry if u can't find perfect invstment right now!",
			icon: faMagnifyingGlassDollar,
		},
		{
			title: "Learn about company's history",
			info: 'Aplication automaticly generate dynamic site for each investemnt. It means that if our database is updated, system will generate new site or update exsisted on for each investent form the list. In this site you can learn about general investemnt data, read about company history and see prices from last year on list or a chart.',
			icon: faBook,
		},
		{
			title: 'Compare charts',
			info: "Each investment side generate chart with its stock data form last year. You can choose another investment form section to generate new chart under first one. If u hover a specyfic point on chart u will see detailed price and date so u can compare charts easily",
			icon: faChartSimple,
		},
		{
			title: 'Predict Price',
			info: `You can see price history from last year, but maybe you wonder "How this price will change in the future?". Don't worry! Our app can also use advance math and machine learning function to predict price for next update on stock.`,
			icon: faCalculator,
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
