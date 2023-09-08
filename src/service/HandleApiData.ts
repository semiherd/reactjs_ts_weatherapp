import { TypeCity,CityDataProps,InfoItemProps,TypeTempConvert} from '../type';
import {convertTemp} from './ConvertTemp'

export const handleApiData= async (dataArr:TypeCity[]): Promise<CityDataProps[]|[]> => {
	try{
		let response:CityDataProps[]=[]
		await Promise.all(dataArr.map(item => {
			const param:TypeTempConvert= {
				type:item.tempType,
				temp:item.temp
			}
			const newTemp:InfoItemProps= {
				c: convertTemp(param),
				date: item.date
			}
			if(response.filter(i=>i.id==item.city.name).length==0){
				response.push({
					id: item.city.name,
					image: item.city.picture,
					name: item.city.name,
					data:[newTemp]
				})
			}else{
				const ids:string[]= response.map(i => i.id)
				const indexNr:number= ids.indexOf(item.city.name)				
				response[indexNr]= {
					...response[indexNr],
					data: [...response[indexNr].data,newTemp]
				}
			}	
		}))
		return response
	}catch(e){
		console.log(e)
		return []
	}
}