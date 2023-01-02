import { Investment, StyledButton } from './styles';

const SignleInvestmentMini = ({ company, sector, country }) => {
    return ( 
        <Investment>
            <div className="name">
                {company}
            </div>
            <div className="info">
                <span>Sector:<br/><p>{sector}</p></span>
                <span>Country:<br/><p>{country}</p></span>
                <span>Currency:<br/><p>???</p></span>
                <span>Some info:<br/><p>Info</p></span>
                <span>Some info:<br/><p>Info</p></span>
                <span>Some info:<br/><p>Info</p></span>
            </div>
        </Investment>
     );
}
 
export default SignleInvestmentMini;