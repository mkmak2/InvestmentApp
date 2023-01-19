import { Content, Filters, MainContent, Container, StyledSelect } from './styles';
import SignleInvestmentMini from '../../components/SingleInvestmentMini';
import Navigation from '../../components/Naviation/index';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { makePagination } from './utils/utils';

const Investments = ({ data }) => {

	const [investmentsList, setInvestmentsList] = useState(data);
	const allSectors = [];
	data.forEach(inv => {
		if(allSectors.indexOf(inv.data.Sector) === -1){
			allSectors.push(inv.data.Sector)
		}
	})

	const allExchanges = [];
	data.forEach(inv => {
		if(allExchanges.indexOf(inv.data.Exchange) === -1){
			allExchanges.push(inv.data.Exchange)
		}
	})

	const allIndustries = [];
	data.forEach(inv => {
		if(allIndustries.indexOf(inv.data.Industry) === -1){
			allIndustries.push(inv.data.Industry)
		}
	})

	const [counter, setCounter] = useState(0);
	const [filters, setFilters] = useState(allSectors);
	const [filterProperty, setFilterProperty] = useState('sector');
	const [filterValue, setFilterValue] = useState();

	const clearChecked = () =>{
		const myCheckbox = document.getElementsByName("myCheckbox");
		myCheckbox.forEach(el => {
		  el.checked = false;
		});
	}

	const handleSelect = (id) => {
		clearChecked();
		document.getElementById(id).checked = true;
		setFilterValue(id);
	  }

	const FilterCheckboxes = filters.map(e => (
		<div className='single-checkbox'>
		<input className='pure-checkbox' id={e} name='myCheckbox' type='checkbox' value={e} onClick={() => handleSelect(e)}/>
		<label htmlFor={e}>{e}</label>
		</div>
	))

	const investments = investmentsList.map(i => (
		<SignleInvestmentMini
			company={i.data.Name}
			sector={i.data.Sector}
			country={i.data.Country}
			symbol={i.symbol}
			currency={i.data.Currency}
			exchange={i.data.Exchange}
			industry={i.data.Industry}
		/>
	));

	const handlePagechange = site => {
		if (site) {
			if (counter + 1 < pagination) {
				setCounter(counter + 1);
			} else {
				setCounter(0);	
			}
		} else {
			if (counter !== 0) {
				setCounter(counter - 1);
			} else {
				setCounter(pagination - 1);
			}
		}
	};

	const pagination = makePagination(investments.length, 8);
	const firstElement = counter * 8;
	const lastElement = (counter + 1) * 8;

	const result = investments.slice(firstElement, lastElement);

	const handleFilterSelect = e => {
		if(e.target.value == 'sector'){
			setFilters(allSectors);
			setFilterProperty('sector');
			setInvestmentsList(data);
		} else if(e.target.value == 'exchange'){
			setFilters(allExchanges);
			setFilterProperty('exchange');
			setInvestmentsList(data);
		} else if(e.target.value == 'industry'){
			setFilters(allIndustries);
			setFilterProperty('industry');
			setInvestmentsList(data);
		}

		clearChecked();
	}

	const applyFilter = () => {
		
		if(filterProperty && filterValue){

		let filteredList;

		if(filterProperty ==='sector'){
			filteredList = data.filter(e => e.data.Sector === filterValue);
		} else if(filterProperty ==='exchange'){
			filteredList = data.filter(e => e.data.Exchange === filterValue);
		} else if(filterProperty ==='industry'){
			filteredList = data.filter(e => e.data.Industry === filterValue);
		}

		setInvestmentsList(filteredList);
		setCounter(0);

		} else return 0;
	}

	const handleReset = () => {
		setCounter(0);
		setFilterProperty('sector');
		setInvestmentsList(data);
		setFilters(allSectors);
		setFilterValue();
		clearChecked();
	}

	return (
		<MainContent>
			<Navigation />
			<div className='header'>
				Search <span>INVESTMENT</span>
			</div>
			<Content>
				<Filters>
					<div>
						<span style={{
							color: '#E6B325'
						}} id='filter-header'>Filters</span>
						<span>Filter by: </span>
						<StyledSelect onChange={handleFilterSelect}>
						<option value='sector'>Sector</option>
						<option value='exchange'>Exchange</option>
						<option value='industry'>Industry</option>
						</StyledSelect>
						<div className='checkboxes'>
							{FilterCheckboxes}
						</div>
						<button onClick={applyFilter}>Apply</button>
						<button onClick={handleReset}>Clear</button>
					</div>
				</Filters>

				<Container>
					<div className='sort'>
						<div className='arrow' id='left'>
							<FontAwesomeIcon
								icon={faChevronLeft}
								onClick={() => handlePagechange(0)}
							/>
						</div>
						<div className='page'>{counter+1}</div>
						<div className='arrow' id='right'>
							<FontAwesomeIcon
								icon={faChevronRight}
								onClick={() => handlePagechange(1)}
							/>
						</div>
					</div>

					<div className='investments'>{result}</div>
				</Container>
			</Content>
		</MainContent>
	);
};

export async function getStaticProps() {
	const res = await fetch('http://127.0.0.1:8000/api-sym');
	const data = await res.json();

	return {
		props: { data },
	};
}

export default Investments;
