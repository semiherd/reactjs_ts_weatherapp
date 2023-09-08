export const hideCity= (item:string):void => {
	let response:string[]=[]
	const hiddenItems= window.localStorage["hidden"]
	if(!hiddenItems) response=[item]	
	else{
		const current= JSON.parse(hiddenItems)
		if(current.indexOf(item)>-1) 
			response= current.filter((i:string)=>i!=item)
		else response= [...current,item]		
	}
	window.localStorage.setItem("hidden",JSON.stringify(response))
}
export const unhideCity= (item:string):string[] => {
	let response:string[]=[]
	const hiddenItems= window.localStorage["hidden"]
	if(hiddenItems){
		const current= JSON.parse(hiddenItems)
		if(current.indexOf(item)>-1) 
			response= current.filter((i:string)=>i!=item)
		else response= [...current,item]		
		window.localStorage.setItem("hidden",JSON.stringify(response))
	}
	return response
}