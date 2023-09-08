import React, { useState,useEffect,useMemo } from "react"
import { TypeCity,CityDataProps,SortingOptions } from '../type'
import {Header} from './Header'
import City from '../component/home/City'
import NoItem from '../component/home/NoItem'
import ListItems from '../component/home/List'
import {fetchAll,handleFilter,sortByKey,handleLs,handleApiData} from '../service/index'
import '../style/Home.css'
import '../style/Header.css'
import axios from 'axios'

export const Home = () => {
	const [cityList,setCityList]= useState<CityDataProps[] | []>([])
	const [searchText,setSearchText]= useState<string>('')
	const [visible,setVisible]= useState<CityDataProps[] | []>([])
	const [sorting,setSorting]= useState<SortingOptions>('asc')
	const [hiddenItems, setHiddenItems] = useState<string[]|[]>(() => handleLs());
	
	const handleVisible= (data:CityDataProps[]|[]) => {
		setVisible(data)
	}

	const hideCity= (item:string):void => {
		try{
			setHiddenItems(prev => [...prev,item])
		}catch(e){
			console.log(e)
		}
	}
	const memoizedList = useMemo(() => {
    return (
			<ListItems
				data={visible} 
				renderItem={(item) => <City 
					key={item.id} 
					hidden={hiddenItems}  
					item={item} 
					hideCity={hideCity} />} 
			/>
		)
  }, [visible,hiddenItems])
	
	const initialData= async ():Promise<void> =>{
		try{	
			const apiData= await fetchAll()
			const data:CityDataProps[]= await handleApiData(apiData)
			const sorted:CityDataProps[]= sortByKey(data,"name",'asc') 
			setCityList(sorted)

		}catch(e){
			console.log(e)
		}
	}
	useEffect(() => {
		initialData()
	},[])
	
	useEffect(() => {
		if(cityList) handleFilter(searchText,cityList).then(res => handleVisible(res))
	},[searchText,cityList])
	
	useEffect(() => {
		localStorage.setItem('hidden', JSON.stringify(hiddenItems));	
	},[hiddenItems])

	return (
		<div>
			<Header 
				setSearchText= {setSearchText}
				setSorting= {setSorting} 
				setVisible= {setVisible}
				setHiddenItems= {setHiddenItems}
				hiddenItems= {hiddenItems}
				sorting= {sorting}
				visible= {visible}
				searchText= {searchText}
			/>
			<div className="app-body">
				{visible.length>0 && memoizedList}
				{visible.length==0 && <NoItem title="No City Found" />}
				{cityList.length>0 && hiddenItems.length==visible.length && <NoItem title="All Cities are Hidden"  />}
			</div>			
		</div>
	)
};

