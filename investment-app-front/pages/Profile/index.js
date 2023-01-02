//import { MainContent, StyledHeader } from '../Investments/styles';

import { useState } from 'react';

const Profile = () => {

    const[login, setLogin] = useState();
    const[haslo, setHaslo] = useState('');
    
    const handleLoginChange = (event) =>{
        setLogin(event.target.value);
    };

    const handleHasloChange = (event) =>{
        setHaslo(event.target.value);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = {
            login,
            haslo
        }

        const res = await fetch('http://127.0.0.1:8000/login/', {
            method: 'POST',
            body: JSON.stringify(data),
          });
          const result = await response.json()
        console.log(result)
    }

    return ( 
        <div>
            <form>
                <label htmlFor="login" >Login:</label>
                <input type="text" id='login' onChange={handleLoginChange}/>
                <label htmlFor="haslo">Login:</label>
                <input type="text" id='haslo' onChange={handleHasloChange}/>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <br/>
            <br/>
            <br/>
            <span>{login}</span>
            <br/>
            <span>{haslo}</span>
        </div>
     )
}
 
export default Profile;