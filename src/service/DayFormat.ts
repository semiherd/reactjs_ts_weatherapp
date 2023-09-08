export const dayFormat= (item:string) => {
	const months:string[]=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	const daySuf:string[]=['th','st','nd','rd','th','th','th','th','th','th']
	const year:string= item.split('-')[0];
	const month:number= Number(item.split('-')[1]);
	const monthName:string= months[month-1];
	const dayNr:number= Number(item.split('-')[2].split('T')[0])
	const timeStr:string= item.split('T')[1].slice(0,5)

	const indexNr:number= Number(dayNr.toString())
	const day:string= dayNr + daySuf[indexNr] + ' of '+ monthName +','+year;  
	const time:string= timeStr.slice(0,2)=='00'? timeStr.slice(0,5):timeStr.charAt(0)=='0'?timeStr.slice(1,5):timeStr.slice(0, 5)

	return {
		day,time
	};
} 