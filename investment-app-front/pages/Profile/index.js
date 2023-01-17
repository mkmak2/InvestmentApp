import { LeftPanel, MainContainer, RightPanel, UserPanel, StyledIcon } from './styles';
import Navigation from './../../components/Naviation/index';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Profile = ({ data }) => {
    
    const [isLogged, setIsLogged] = useState(false);
    return ( 
        <MainContainer>
            <LeftPanel>
                {isLogged ? (
                    <UserPanel>
                        <h1>Welcome <span>User</span></h1>
                        <div className='saved-inv'>
                            <h2>Your saved investments:</h2>
                            <div className='inv-box'>
                                <div className='single-inv'><span>dupa</span><StyledIcon icon={faXmark}/></div>
                                <div className='single-inv'><span>dupa</span><StyledIcon icon={faXmark}/></div>
                                <div className='single-inv'><span>dupa</span><StyledIcon icon={faXmark}/></div>
                                <div className='single-inv'><span>dupa</span><StyledIcon icon={faXmark}/></div>
                            </div>
                            <div className='add-more'>
                                <span>Want to add more investments to follow?</span>
                                <button><Link href='/Investments'>Explore</Link></button>
                            </div>
                            <button>Log out</button>
                        </div>
                    </UserPanel>

                ): (
                    <div className="form-box">
                    <LoginForm />
                    <div className="line">
                    </div>
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





