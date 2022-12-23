import { MainContent, StyledHeader } from './styles';
import SidePanel from '../../components/SidePanel/index';
import SingleInvestmentMini from '../../components/SingleInvestmentMini/index';

const Investments = ({ data }) => {
	return (
		<>
			<SidePanel></SidePanel>
			<MainContent>
				<StyledHeader>
                    <h1>Lista Inwestycji</h1>
				</StyledHeader>
                <div className="list">
					{data.map(item => (
						<SingleInvestmentMini
							company={item.data.Name}
							type={item.data.Sector}
							price='1000000USD'
							lastUpdate='hejhej'
						/>
					))}
                </div>
			</MainContent>
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch('http://127.0.0.1:8000/api');
	const data = await res.json();

	return {
		props: { data },
	};
}

export default Investments;
