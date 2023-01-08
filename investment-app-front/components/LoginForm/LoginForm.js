import { StyledButton, StyledForm, StyledInput } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LoginForm = () => {

    const [type, setType] = useState(true);

    const handleClick = (e) =>{
        e.preventDefault();
    }
    
    const display = type ? 'password' : 'text';
    const color = type ? 'grey' : ' #E6B325';

    return ( 
        <div>
            <h1>Sing in</h1>
        <StyledForm color={color}>
            <StyledInput type='text' placeholder='Login...' />
            <StyledInput type={display} placeholder='Password...' />
            <div className="show">
            <FontAwesomeIcon icon={faEye} id='icon' onClick={() => setType(!type)}/>
            </div>
            <StyledButton onClick={handleClick}>Sing in</StyledButton>
        </StyledForm>
        </div>
     );
}
 
export default LoginForm;