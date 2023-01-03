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

	return <h1>hej</h1>;
};

export default InvestmentDeatlis;
