import Header from '../components/Header';
import { MainContainer } from './styles';

const Layout = ( { children } ) => {
    return ( 
        <>
        <Header/>
        <MainContainer>
                { children }
        </MainContainer>
        </>
     );
}
 
export default Layout;