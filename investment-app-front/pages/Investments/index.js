import { Content, Filters, MainContent, Container } from './styles';
import SignleInvestmentMini from '../../components/SingleInvestmentMini';
import Navigation from '../../components/Naviation/index';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Investments = ({ data }) => {
	const [counter, setCounter] = useState(0);

	const investments = data.map(i => (
		<SignleInvestmentMini
			company={i.data.Name}
			sector={i.data.Sector}
			country={i.data.Country}
			symbol={i.symbol}
			currency={i.data.Currency}
			exchange={i.data.Exchange}
			industry={i.data.Industry}
		/>
	));

	const handlePagechange = site => {
		if (site) {
			if (counter + 1 < pagination) {
				setCounter(counter + 1);
			} else {
				setCounter(0);
			}
		} else {
			if (counter !== 0) {
				setCounter(counter - 1);
			} else {
				setCounter(pagination - 1);
			}
		}
	};

	const pagination = Math.ceil(investments.length / 8);
	const firstElement = counter * 8;
	const lastElement = (counter + 1) * 8;

	const result = investments.slice(firstElement, lastElement);

	return (
		<MainContent>
			<Navigation />
			<div className='header'>
				Search <span>INVESTMENT</span>
			</div>
			<Content>
				<Filters>tutaj bd filtry ale to potem</Filters>

				<Container>
					<div className='sort'>
						<div className='arrow' id='left'>
							<FontAwesomeIcon
								icon={faChevronLeft}
								onClick={() => handlePagechange(0)}
							/>
						</div>
						<div className='page'></div>
						<div className='page'></div>
						<div className='page'></div>
						<div className='page'></div>
						<div className='page'></div>
						<div className='arrow' id='right'>
							<FontAwesomeIcon
								icon={faChevronRight}
								onClick={() => handlePagechange(1)}
							/>
						</div>
					</div>

					<div className='investments'>{result}</div>
				</Container>
			</Content>
		</MainContent>
	);
};

export async function getStaticProps() {
	const res = await fetch('http://127.0.0.1:8000/api-sym');
	const data = await res.json();

	return {
		props: { data },
	};
}

export default Investments;
