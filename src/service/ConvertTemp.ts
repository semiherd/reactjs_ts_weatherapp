import { TypeTempConvert} from '../type';

export const convertTemp= (param:TypeTempConvert):(number|null) => {
	try{
		switch(param.type){
			case 'K':
				const k:number= param.temp - 273.15
				return Number(k.toFixed(1));
			case 'F':
				const f:number= (param.temp - 32) / 1.8
				return Number(f.toFixed(1));
			case 'C':
				return Number(param.temp.toFixed(1))
			default: 
				return null;					
		}
	}catch(e){
		return null
	}
}