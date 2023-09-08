import React from "react"
export type TempType= 'K'|'C';
export type CityName= 'amsterdam' | 'barcelona' | 'budapest' | 'hong kong' | 'san francisco' | 'tokyo'
export type SortingOptions= 'asc' | 'desc'
export type TypeHeaderProps={
			setSearchText: React.Dispatch<React.SetStateAction<string>>
			setSorting: React.Dispatch<React.SetStateAction<SortingOptions>> 
			setVisible: React.Dispatch<React.SetStateAction<CityDataProps[]>>
			setHiddenItems: React.Dispatch<React.SetStateAction<string[]>> 
			hiddenItems: string[]
			sorting: SortingOptions
			visible: CityDataProps[]
			searchText: string
}
export type TypeNoItem={
	title: string
}
export type TypeCity={
	date: string,
	tempType: string,
	temp: number,
	city: {
		name: string
		picture: `https://firebasestorage.googleapis.com/v0/b/mobile-assignment-server.appspot.com/o/${string}`
	}
}
export type CityProps={
	item: CityDataProps
	hidden: string[]
	hideCity: (id:string) => void
}
export type CityActionProp={
	id: string
	hideCity: (id:string) => void
} 
export type CityDataProps={
	id: string
	name: string
	image: string
	data: InfoItemProps[],
}
export type RouteItemProps={
	title: string // will be displayed to the user
	path: string // real path
	exact?: boolean
	params?: CityDataProps
	content: string | React.ReactNode // react component
}
export type Param={
	id: string
	value: string
}
export type ContainerProps={
	content: React.ReactNode
}
export type BackButtonProps={
	text: string
	onClick: () => void
}
export type InfoItemProps={
		c: number|null
		date: string
}
export type HiddenIconProps={
	data: string[]
	updateData: React.Dispatch<React.SetStateAction<string[]>>
}
export type HiddenItemsProps= {
	data: string[]
	updateData: React.Dispatch<React.SetStateAction<string[]>>
}
export interface ListProps<TItem>{
	data: TItem[]
	renderItem: (item:TItem) => React.ReactNode;
}
export type CityDetailProps={
	id: string
}
export type SortIconProps= {
	arr: CityDataProps[]
	sorting: SortingOptions
	setVisible: React.Dispatch<React.SetStateAction<CityDataProps[]>>
	setSorting: React.Dispatch<React.SetStateAction<SortingOptions>>
}
export type SearchBarProps={
	sorting: SortingOptions
	visibleItems: CityDataProps[]
	setSearchText: React.Dispatch<React.SetStateAction<string>>
	setSorting: React.Dispatch<React.SetStateAction<SortingOptions>>
}
export type TypeTempConvert= {
	type:string,
	temp:number
}
export type TypeRouter<TParams> = {
	params: TParams;

	goBack: () => void;
	openPage: (page: string) => void;
}
export type TypeUseLocation={
	pathname: string
	hash: string
	key: string
	search: string
	state: CityDataProps
}
export type TypeGetRequestResponse = {
  data: TypeCity[] | []
}