import { useState,useMemo } from "react"
import { TypeHeaderProps,CityDataProps,SortingOptions } from '../type';
import SearchBar from '../component/search/SearchBar'
import RefreshIcon from '../component/search/RefreshIcon'
import SortIcon from '../component/search/SortIcon'
import HiddenIcon from '../component/search/HiddenIcon'
import '../style/Home.css'
import '../style/Header.css'

export const Header = (props:TypeHeaderProps):JSX.Element => {
	const { 
		setSearchText,setSorting,setVisible,setHiddenItems,
		sorting,visibleItems,hiddenItems,refreshFn,searchText }= props

	const memoizedSearchBar = useMemo(() => {
    return <SearchBar setSearchText={setSearchText} searchText={searchText} />
  }, [searchText])

	const memoizedSortIcon = useMemo(() => {
    return <SortIcon visibleItems={visibleItems} 
			setVisible={setVisible} 
			sorting={sorting} 
			setSorting={setSorting} />
  },[sorting])

	const memoizedRefreshIcon = useMemo(() => {
    return <RefreshIcon refreshFn={refreshFn} />
  },[])

	const memoizedHiddenIcon = useMemo(() => {
    return <HiddenIcon data={hiddenItems} updateData={setHiddenItems} />
  },[hiddenItems])

	return (
			<div className="header-bar" data-testid="header" >
				{memoizedSearchBar}
				<div className="setting">
					{memoizedHiddenIcon}
					<div className="setting-icons">
						{memoizedSortIcon}
						{memoizedRefreshIcon}
					</div>
				</div>
			</div>
	)
};

