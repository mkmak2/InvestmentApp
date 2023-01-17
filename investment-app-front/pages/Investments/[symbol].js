import Navigation from '../../components/Naviation';
import {
	MainContent,
	InvestmentContent,
	StyledSelect,
	StyledButton,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Chart from '../../components/Chart/Chart.js';
import { useState } from 'react';

export const getStaticPaths = async () => {
	const res = await fetch('http://127.0.0.1:8000/api-sym');
	const data = await res.json();

	const paths = data.map(item => {
		return {
			params: { symbol: item.symbol },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async context => {
	//fetch genaral info about single investment
	const symbol = context.params.symbol;
	const res = await fetch('http://127.0.0.1:8000/api-sym/' + symbol);
	const data = await res.json();

	//fetch stock data for single investment
	const response = await fetch('http://127.0.0.1:8000/stock-sym/' + symbol);
	const answer = await response.json();

	const fullPricesData = answer.data.prices
		? Object.values(answer.data.prices)[1]
		: Object.values(answer.data)[1];
	const prices = Object.values(fullPricesData);

	//fetch all symbols for compare
	const resp = await fetch('http://127.0.0.1:8000/api-sym/');
	const answ = await resp.json();
	const symbols = [];

	//fetch all stock data
	const respo = await fetch('http://127.0.0.1:8000/stock-sym/');
	const allStock = await respo.json();

	answ.forEach(e => {
		symbols.push(e.symbol);
	});

	return {
		props: { investment: data, prices, fullPricesData, symbols, allStock },
	};
};

const InvestmentDeatlis = ({
	investment,
	prices,
	fullPricesData,
	symbols,
	allStock,
}) => {
	const date = Object.keys(fullPricesData).slice(0, 54); //last year dates
	const lastUpdate = date[0]; //last date

	//LAST YEAR PRICES
	const lastPrices = prices.slice(0, 54);
	const closedPrices = [];
	lastPrices.forEach(element => {
		closedPrices.push(Object.values(element)[3]);
	});

	const actualPrice = closedPrices[0]; //last price

	//this aray is used only to map dates and prices into 1 span
	const foo = [];
	for (let i = 1; i <= 53; i++) {
		foo.push(i);
	}

	//list of prices with dates
	const pricesList = foo.slice(1).map(e => {
		if (closedPrices[e]) {
			return (
				<span key={e}>
					{date[e]}: {closedPrices[e]}
				</span>
			);
		} else return null;
	});

	//PREPARING DATA FOR CHART
	const dataSet = [
		{
			label: investment.data.Symbol,
			data: closedPrices.reverse(),
			borderColor: '#E6B325',
			backgroundColor: '#E6B325',
		},
	];

	const dataForChart = {
		labels: date.reverse(),
		datasets: dataSet,
	};

	//OPTOIN VALUES TO COMPARE
	const [charts, setCharts] = useState([]);
	const [symbolToCompare, setSymbolToCompare] = useState();
	const [storedSymbols, setStoredSymbols] = useState([]);

	//remove symbol of current investment from symbols to compare
	const removeSymbol = (value, index, arr) => {
		if (value == investment.symbol) {
			arr.splice(index, 1);
			return true;
		} else return false;
	};

	const x = symbols.filter(removeSymbol);

	const options = symbols.map(e => (
		<option key={e} value={e}>
			{e}
		</option>
	));

	const handleCompareClick = async () => {
		if (!symbolToCompare) return false;
		if (charts.length > 0) setCharts([]);

		const current = allStock.filter(e => e.symbol == symbolToCompare);

		const lastYearPrices = current[0].data.prices
			? Object.values(current[0].data.prices)[1]
			: Object.values(current[0].data)[1];
		const dates = Object.keys(lastYearPrices).slice(0, 54);
		const preparePrices = Object.values(lastYearPrices).slice(0, 54);
		const prices = [];

		preparePrices.forEach(e => {
			prices.push(Object.values(e)[3]);
		});

		const dataForChart = {
			id: storedSymbols.length,
			chartData: {
				labels: dates.reverse(),
				datasets: [
					{
						label: symbolToCompare,
						data: prices.reverse(),
						borderColor: '#E6B325',
						backgroundColor: '#E6B325',
					},
				],
			},
		};

		setCharts(prev => [...prev, dataForChart]);
		setStoredSymbols(prev => [...prev, symbolToCompare]);
	};

	const handleChange = e => {
		setSymbolToCompare(e.target.value);
	};

	const handleClose = () => {
		setCharts([]);
	};

	const chartsToCompare = charts.map(e => (
		<div key={e.id} className='single-chart'>
			<Chart data={e.chartData} close={true} onClick={handleClose} />
		</div>
	));

	const [predictedPrice, setPredictedPrice] = useState(null);
	const dots = <div className='dots'><div className='dot'></div><div className='dot'></div><div className='dot'></div></div>;

	const handlePredictPrice = async () => {
		
		setPredictedPrice(dots);
		
		const res = await fetch('http://127.0.0.1:8000/price/' + investment.symbol);
		const answ = await res.json();
		
		if(answ){
		setPredictedPrice(Object.values(answ[0]));
		}
		
	};

	return (
		<MainContent>
			<Navigation />
			<div className='header'>
				<Link href='/Investments'>
					<FontAwesomeIcon icon={faCircleLeft} id='back' />
				</Link>
				<span>{investment.data.Name}</span>
			</div>
			<InvestmentContent>
				<div className='general-info'>
					<h2>General Info</h2>
					<span>Country: {investment.data.Country}</span>
					<span>Sector: {investment.data.Sector}</span>
					<span>Currency: {investment.data.Currency}</span>
					<span>Exchange: {investment.data.Exchange}</span>
					<span>Industry: {investment.data.Industry}</span>
					<p>{investment.data.Description}</p>
				</div>
				<div className='prices'>
					<h2>
						Actual Price:
						<span> {actualPrice}</span>
					</h2>
					<h2>
						Last update: <span>{lastUpdate}</span>{' '}
					</h2>
					<h3>Last year:</h3>
					<div className='full-prices'>{pricesList}</div>
				</div>
				<div className='chart'>
					<h2>Last year price-changing visualization</h2>
					<div className='chart-box'>
						<div className='all-charts'>
							<div className='single-chart'>
								<Chart data={dataForChart} />
							</div>
							{chartsToCompare}
						</div>
						<div className='options'>
							<label htmlFor='symbol'>Compare with: </label>
							<StyledSelect id='symbol' onChange={handleChange}>
								<option value=''>-symbol-</option>
								{options}
							</StyledSelect>
							<StyledButton onClick={handleCompareClick}>Compare</StyledButton>
							<div className='predict'>
								<button id='predictButton' onClick={handlePredictPrice}>
									Predict price
								</button>
								<span>Price for next week: </span>
								<span>{predictedPrice}</span>

							</div>
						</div>
					</div>
				</div>
			</InvestmentContent>
		</MainContent>
	);
};

export default InvestmentDeatlis;
