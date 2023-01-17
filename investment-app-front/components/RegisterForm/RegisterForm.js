import { StyledButton, StyledForm, StyledInput } from '../LoginForm/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const RegisterForm = () => {

    const [type, setType] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    
    const addUser = async (data) => {

        try{
            const res = await fetch('http://127.0.0.1:8000/user-create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if(res.status === 303) setError('This accound already exist!');
            else clearForm();
        } catch(e) {
            console.log(e);
        }
    }
    const clearForm = () => {
        setPassword('');
        setRepeatPassword('');
        setUsername('');
        setError('You have succesfully register in the system!')
    }

    const handleUserChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    
    const handleRepeatPasswordChange = e => {
        setRepeatPassword(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault();
        const usernameToSend = username;
        const passwordToSend = password;
        const repeatPasswordToSend = repeatPassword;

        if(passwordToSend && usernameToSend && repeatPasswordToSend){
            if(passwordToSend === repeatPasswordToSend){
                const data = {
                    username: usernameToSend,
                    password: passwordToSend,
                }
                addUser(data);
            }else{
                setError("Password doesn't match to each other!")
            }

        } else setError('You have to fill every field!')
    }


    const display = type ? 'password' : 'text';
    const color = type ? 'grey' : ' #E6B325';

    return ( 
        <div>
            <h1>Register</h1>
        <StyledForm color={color}>
            <StyledInput type='text' placeholder='Login...' value={username} onChange={handleUserChange}/>
            <StyledInput type={display} placeholder='Password...'value={password} onChange={handlePasswordChange} />
            <div className="show">
            <FontAwesomeIcon icon={faEye} id='icon' onClick={() => setType(!type)}/>
            </div>
            <StyledInput type='password' placeholder='Repeat password..' value={repeatPassword} onChange={handleRepeatPasswordChange}/>
            {error && <span id='error'>{error}</span>}
            <StyledButton onClick={handleClick}>Submit</StyledButton>
        </StyledForm>
        </div>
     );
    }

     export default RegisterForm;














// {
//     isLogged: true;
//     data:
//     [
//         {login,haslo, flaga},
//         {},
//         {},
//     ]
// }




