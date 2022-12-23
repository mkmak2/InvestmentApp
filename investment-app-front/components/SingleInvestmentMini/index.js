import { InvestmentBox, StyledButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEye,
	faStar,
	faScaleUnbalanced,
} from '@fortawesome/free-solid-svg-icons';

const SingleInvestmentMini = ({ company, type, price, lastUpdate }) => {
	return (
		<InvestmentBox>
			<div className='description'>
				<h3>Company: {company} </h3>
				<h4>Type: {type} </h4>
				<h4>Actual price: {price} </h4>
				<h4>Last update: {lastUpdate} </h4>
			</div>
			<div className='actions'>
				<StyledButton>
					<span>View more </span>
					<FontAwesomeIcon icon={faEye} />{' '}
				</StyledButton>
				<StyledButton>
					<span>Compare </span>
					<FontAwesomeIcon icon={faScaleUnbalanced} />{' '}
				</StyledButton>
				<StyledButton>
					<span>Add to fav </span>
					<FontAwesomeIcon icon={faStar} />{' '}
				</StyledButton>
			</div>
		</InvestmentBox>
	);
};

export default SingleInvestmentMini;
