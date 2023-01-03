import { LeftPanel, MainContainer, RightPanel   } from './styles';
import Navigation from './../../components/Naviation/index';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Profile = () => {


    return ( 
        <MainContainer>
            <LeftPanel>
                <div className="form-box">
                    <LoginForm />
                    <div className="line"></div>
                    <RegisterForm />
                </div>

            </LeftPanel>

            <RightPanel>
                <Navigation />
            </RightPanel>
        </MainContainer>
     )
}
 
export default Profile;