import Navigation from '../../components/Naviation';
import { MainContent, InvestmentContent } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


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
	const symbol = context.params.symbol;
	const res = await fetch('http://127.0.0.1:8000/api-sym/' + symbol);
	const data = await res.json();

	return {
		props: { investment: data },
	}; 
};

const InvestmentDeatlis = ({ investment }) => {
	console.log(investment);

	return(
		<MainContent>
			<Navigation />
			<div className="header">
				<Link href ='/Investments'><FontAwesomeIcon icon={faCircleLeft} id='back'/></Link>		
				<span>{investment.data.Name}</span>
			</div>
			<InvestmentContent>
				<div className="general-info">
				<h2>General Info</h2>
				<span>Country: {investment.data.Country}</span>
				<span>Sector: {investment.data.Sector}</span>
				<span>Currency: {investment.data.Currency}</span>
				<span>Exchange: {investment.data.Exchange}</span>
				<span>Industry: {investment.data.Industry}</span>
				<p>{investment.data.Description}</p>
				</div>
				<div className="prices"></div>
				<div className="chart"></div>
			</InvestmentContent>
		</MainContent>
	);
		
};

export default InvestmentDeatlis;
