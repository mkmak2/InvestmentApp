import { StyledButton, StyledForm, StyledInput } from '../LoginForm/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const RegisterForm = () => {

    const [type, setType] = useState(true);
    const [data, setData] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })

    const handleClick = (e) =>{
        e.preventDefault();
    }



    const display = type ? 'password' : 'text';
    const color = type ? 'grey' : ' #E6B325';

    return ( 
        <div>
            <h1>Register</h1>
        <StyledForm color={color}>
            <StyledInput type='text' placeholder='Login...' />
            <StyledInput type={display} placeholder='Password...' />
            <div className="show">
            <FontAwesomeIcon icon={faEye} id='icon' onClick={() => setType(!type)}/>
            </div>
            <StyledInput type='password' placeholder='Repeat password..' />
            
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




