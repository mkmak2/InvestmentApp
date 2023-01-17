import { LeftPanel, MainContainer, RightPanel, UserPanel   } from './styles';
import Navigation from './../../components/Naviation/index';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useState } from 'react';

const Profile = ({ data }) => {
    
    const [isLogged, setIsLogged] = useState(false);
    return ( 
        <MainContainer>
            <LeftPanel>
                {isLogged ? (
                    <UserPanel>
                        <h1>Hello User!</h1>
                    </UserPanel>

                ): (
                    <div className="form-box">
                    <LoginForm />
                    <div className="line"></div>
                    <RegisterForm />
                    </div> 
                )}
            </LeftPanel>

            <RightPanel>
                <Navigation />
            </RightPanel>
        </MainContainer>
     )
}
 
export default Profile;

export const getStaticProps = async () => {
    const res = await fetch('http://127.0.0.1:8000/user-list/');
    const answer = await res.json();

    const loggedUser = answer.filter(user => user.is_logged);
    const data = loggedUser ? loggedUser : null;

    return {
        props: {data}
    }
}





