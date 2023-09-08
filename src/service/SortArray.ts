import {SortingOptions, CityDataProps, InfoItemProps } from '../type'

export const sortByKey= <
	Obj extends CityDataProps,
	FirstKey extends keyof Obj,
> (
	arr:Obj[],
	key1: FirstKey,
	order: SortingOptions
):(CityDataProps[])	=> {
	const direction:number[]= order=='asc'?[-1,1]:order=='desc'?[1,-1]:[]
	return arr?.sort((a, b) => {
		const nameA= a[key1]
		const nameB= b[key1]	
		return nameA < nameB? direction[0] : nameA > nameB? direction[1] : 0
	})
}

