import { CityDataProps } from '../type';

export const handleFilter= async function (searchKey:string,list:CityDataProps[]):Promise<CityDataProps[] | []>{
	try{			
		if(searchKey=='') return list
		return list?.filter((item) => item.id.toLowerCase().includes(searchKey.toLowerCase()))		
	}catch(e){
		console.log(e)
		return []
	}
}