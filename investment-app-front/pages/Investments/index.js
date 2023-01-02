import { Content, Filters, MainContent, Container } from './styles';
import SignleInvestmentMini from '../../components/SingleInvestmentMini';
import Navigation from '../../components/Naviation/index'

const Investments = ({ data }) => {

    const investments = data.map(i => (
        <SignleInvestmentMini company={i.data.Name} sector={i.data.Sector} country={i.data.Country} />
    ));
    
    return ( 
        <MainContent>
            <Navigation />
            <div className="header">
                Search <span>INVESTMENT</span>
            </div>
            <Content>
            <Filters>
                tutaj bd filtry ale to potem
            </Filters>

            <Container>
                <div className="sort">
                    <form>
                        <label htmlFor="sort">Sort by: </label>
                        <select id='sort' >
                            <option value="none">-</option>
                            <option value="price down">price down</option>
                            <option value="price up">price up</option>
                            <option value="date down">date down</option>
                            <option value="date up">date up</option>
                        </select>
                    </form>
                </div>

                <div className="investments">
                    {investments}
                </div>

            </Container>
            </Content>
        </MainContent>
     );
}

export async function getStaticProps() {
	const res = await fetch('http://127.0.0.1:8000/api');
	const data = await res.json();

	return {
		props: { data },
	};
}
 
export default Investments;