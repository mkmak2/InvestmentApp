import { StyledButton, StyledForm, StyledInput } from './styles';

const LoginForm = () => {

    const handleClick = (e) =>{
        e.preventDefault();
    }
    return ( 
        <div>
            <h1>Sing in</h1>
        <StyledForm>
            <StyledInput type='text' placeholder='Login...' />
            <StyledInput type='password' placeholder='Password...' />
            <StyledButton onClick={handleClick}>Sing in</StyledButton>
        </StyledForm>
        </div>
     );
}
 
export default LoginForm;