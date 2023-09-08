import { useState,useMemo } from "react"
import { TypeHeaderProps,CityDataProps,SortingOptions } from '../type';
import SearchBar from '../component/search/SearchBar'
import SortIcon from '../component/search/SortIcon'
import HiddenIcon from '../component/search/HiddenIcon'
import '../style/Home.css'
import '../style/Header.css'

export const Header = (props:TypeHeaderProps):JSX.Element => {
	const { 
		setSearchText,setSorting,setVisible,setHiddenItems,
		sorting,visible,hiddenItems,
		searchText }= props

	const memoizedSearchBar = useMemo(() => {
    return <SearchBar 
			setSearchText={setSearchText} 
			setSorting={setSorting} 
			sorting={sorting} 
			visibleItems={visible} />
  }, [searchText])

	const memoizedSortIcon = useMemo(() => {
    return <SortIcon arr={visible} 
			setVisible={setVisible} 
			sorting={sorting} 
			setSorting={setSorting} />
  },[sorting])

	const memoizedHiddenIcon = useMemo(() => {
    return <HiddenIcon data={hiddenItems} updateData={setHiddenItems} />
  },[hiddenItems])

	return (
			<div className="header-bar" data-testid="header" >
				{memoizedSearchBar}
				<div className="setting">
					{memoizedHiddenIcon}
					{memoizedSortIcon}
				</div>
			</div>
	)
};

