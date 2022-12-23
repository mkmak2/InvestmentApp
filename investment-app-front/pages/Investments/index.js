import { MainContent, StyledHeader } from './styles';
import SidePanel from '../../components/SidePanel/index'

const Investments = () => {
    return ( 
        <>
        <SidePanel>

        </SidePanel>
        <MainContent>
            <StyledHeader>
                <h1>Lista Inwestycji</h1>

            </StyledHeader>
        </MainContent>
        </>
     );
}

export async function getStaticProps(){
    const res = await fetch('http://127.0.0.1:8000/api')
    const post = res['Symbol'].json();


    return{
        props:
            post
    };
}
 
export default Investments;