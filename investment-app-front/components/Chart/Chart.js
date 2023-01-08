import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { ChartContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Chart = ({ data, close, onClick }) => {


	return (
		<ChartContainer>
			<Line 
           	 	data={data}
        	/>
			{close ? (<div className="close" onClick={onClick}><FontAwesomeIcon icon={faXmark}/></div>) : (null)}
		</ChartContainer>
	);
};

export default Chart;
