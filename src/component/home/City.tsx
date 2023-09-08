import { useState,useEffect } from "react"
import { CityDataProps,CityProps } from '../../type';
import { useNavigate } from 'react-router-dom'
import  '../../style/City.css'
import CityAction from './CityAction';

const City = (props:CityProps) =>{
	const navigate = useNavigate();
	const {item,hidden,hideCity}= props
	const [hiddenState,setHiddenState]= useState<'visible'|'invisible'>('visible')
	
	useEffect(() => {
		const visibility= hidden?.indexOf(item.name)>-1?'invisible':'visible'
		setHiddenState(visibility)
	},[hidden])

	const toCityDetail=(data:CityDataProps)=>{
		navigate(
			`/city/${item.name.toLowerCase()}`,
			{
				state: data
			}
		)
	}

	return 	(
		<div className={`city-item ${hiddenState}`} data-testid={`city-item-${item.name}`}>
			<div className={`city-title`}>
				<h1 className={`name`}>{item.name}</h1>
			</div>
			<CityAction id={item.name} hideCity={hideCity} />
			<div onClick={() => toCityDetail(item)}>
				<img
					className="city-image"
					src={item.image}
					alt={item.name}
				/>
			</div>
		</div>
	)
}

export default City;