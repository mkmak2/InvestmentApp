import { Investment } from './styles';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

const SignleInvestmentMini = ({ company, sector, country, symbol, currency, exchange, industry }) => {
    return ( 
        <Investment>
            <div className="name">
                <span>{company}</span>
                <Link href={'/Investments/' + symbol}><FontAwesomeIcon icon={faCircleRight} id='link' /></Link>
            </div>
            <div className="info">
                <span>Sector:<br/><p>{sector}</p></span>
                <span>Country:<br/><p>{country}</p></span>
                <span>Currency:<br/><p>{currency}</p></span>
                <span>Exchange:<br/><p>{exchange}</p></span>
                <span id='last'>Industry: <br/><p>{industry}</p></span>
            </div>
        </Investment>
     );
}
 
export default SignleInvestmentMini;