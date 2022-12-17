import { MainContent, StyledHeader } from '../Investments/styles';
import SidePanel from '../../components/SidePanel/index';

const Profile = () => {
    return ( 
        <>
        <SidePanel />
        <MainContent>
            <StyledHeader><h1>Zarządzanie kontem</h1></StyledHeader>
        </MainContent>
        </>
     );
}
 
export default Profile;