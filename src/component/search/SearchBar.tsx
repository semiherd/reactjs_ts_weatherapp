import { ChangeEvent } from 'react'
import {SearchBarProps} from '../../type'
import { FaSearch } from "react-icons/fa"
import '../../style/Header.css'

const SearchBar = (props:SearchBarProps):JSX.Element => {
	const {setSearchText,searchText}= props
	
	const searchHandler= (e: ChangeEvent<HTMLInputElement>) => {
		const lowerCase= e.target.value.toLowerCase()
		setSearchText(lowerCase)
	}

	return (
		<div className="search-bar" data-testid="search-bar">
				<span><FaSearch className="search-icon" /></span>
				<input 
					id="search" 
					type="text"
					onChange={searchHandler} 
					placeholder="Search for a city"
				/>
		</div>
	)
};

export default SearchBar
