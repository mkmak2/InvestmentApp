import { StyledButton, StyledForm, StyledInput } from '../LoginForm/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const RegisterForm = () => {

    const handleClick = (e) =>{
        e.preventDefault();
    }
    return ( 
        <div>
            <h1>Register</h1>
        <StyledForm>
            <StyledInput type='text' placeholder='Login...' />
            <StyledInput type='password' placeholder='Password...' />
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




