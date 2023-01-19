import { LeftPanel, MainContainer, RightPanel, UserPanel, StyledIcon } from './styles';
import Navigation from './../../components/Naviation/index';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Profile = ({ data }) => {
    const dataLength = data.length;
    const toggleLogged = dataLength ? true : false;
    const [isLogged, setIsLogged] = useState(toggleLogged);
    const [error, setError] = useState();

    const handleLogOut = async () => {

        const dataToSend = {
            username: data[0].username,
            password: data[0].password,
            is_logged: false,
            investments: data[0].investments
        }

        try{
            const res = await fetch(`http://127.0.0.1:8000/user-update/${data[0].username}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
            window.location.reload(true);
    } catch(e){
        console.log(e)
    }
}

const logIn = async (data, user) => {
    try{
        const res = await fetch(`http://127.0.0.1:8000/user-update/${user}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(res)
        if(res.status === 500) setError("This user doesn't exist!");
        else if(res.status === 304) setError("Incorrect password!");
        else window.location.reload(true);
    } catch(e) {
        console.log(e);
    }
}
    
    const handleDelete = async inv => {
        const tab = data[0].investments;
        const index = tab.indexOf(inv);
        tab.splice(index,1);
        const dataToSend = {
            username: data[0].username,
            password: data[0].password,
            investments: tab
        }
        try{
            const res = await fetch(`http://127.0.0.1:8000/user-update/${data[0].username}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
            console.log(res)
            } catch(e) {
                console.log(e);
            }
            window.location.reload(true);

    }

    
    const savedSymbols = data[0] ?  data[0].investments : null;
    const savedInvestments = savedSymbols ? savedSymbols.map(e => (
        <div key ={e} className='single-inv'><span><Link href={'/Investments/' + e} >{e}</Link></span><StyledIcon icon={faXmark} onClick={() => handleDelete(e)}/></div>
    )) : null;

    return ( 
        <MainContainer>
            <LeftPanel>
                {isLogged ? (
                    <UserPanel>
                        <h1>Welcome <span>{data[0].username}</span></h1>
                        <div className='saved-inv'>
                            <h2>Your saved investments:</h2>
                            <div className='inv-box'>
                                {savedInvestments}
                            </div>
                            <div className='add-more'>
                                <span>Want to add more investments to follow?</span>
                                <button><Link href='/Investments'>Explore</Link></button>
                            </div>
                            <button onClick={handleLogOut}>Log out</button>
                        </div>
                    </UserPanel>

                ): (
                    <div className="form-box">
                    <LoginForm onClick={logIn} err={error}/>
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

export const getServerSideProps = async () => {
    const res = await fetch('http://127.0.0.1:8000/user-list/');
    const answer = await res.json();

    const loggedUser = answer.filter(user => user.is_logged);
    const data = loggedUser;

    return {
        props: {data}
    }
}





