import { StyledButton, StyledForm, StyledInput } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LoginForm = ({ onClick }) => {

    const [type, setType] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = (e) =>{
        e.preventDefault();
        const usernameToSend = username;
        const passwordToSend = password;

        if(usernameToSend && passwordToSend){
            const data = {
                username: usernameToSend,
                password: passwordToSend,
                is_logged: true
            };

            onClick(data,usernameToSend);
            window.location.reload(false);
        }
    }
    
    const display = type ? 'password' : 'text';
    const color = type ? 'grey' : ' #E6B325';

    const handleUserChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    return ( 
        <div>
            <h1>Sing in</h1>
        <StyledForm color={color}>
            <StyledInput type='text' placeholder='Login...' value={username} onChange={handleUserChange} />
            <StyledInput type={display} placeholder='Password...' value={password} onChange={handlePasswordChange}/>
            <div className="show">
            <FontAwesomeIcon icon={faEye} id='icon' onClick={() => setType(!type)}/>
            </div>
            {error && <span id='error'>ERROR</span>}
            <StyledButton onClick={handleClick}>Sing in</StyledButton>
        </StyledForm>
        </div>
     );
}
 
export default LoginForm;