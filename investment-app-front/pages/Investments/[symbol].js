import { StyledHeader } from './styles';

export const getStaticPaths = async () => {
	const res = await fetch('http://127.0.0.1:8000/api');
	const data = await res.json();

	const paths = data.map(item => {
		return {
			params: { symbol: item.data.Symbol },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async context => {
	const symbol = context.params.symbol;
	const res = await fetch('http://127.0.0.1:8000/api/' + symbol);
	const data = await res.json();

	return {
		props: { investment: data },
	};
};

const InvestmentDeatlis = ({ investment }) => {
	return (
		<StyledHeader>
			<h1>{investment.data.Name}</h1>
		</StyledHeader>
	);
};

export default InvestmentDeatlis;
