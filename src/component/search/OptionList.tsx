import { HiViewGridAdd } from "react-icons/hi";
import {HiddenItemsProps} from '../../type'

const OptionList = (props:HiddenItemsProps):JSX.Element => {
	const {data,updateData}= props

	const optionSelect= (item:string):void => {
		try{
			if(data.includes(item)){
				const filtered= data.filter(i=>i!=item)
				updateData(filtered)
			}else{
				updateData(prev => [...prev,item])
			}
		}catch(e){
			console.log(e)
		}
	}
	
	return (
		<div>
			{data?.map((option,index) => <div key={index.toString()} >
				<h1 >{option}</h1>
				<HiViewGridAdd onClick={() => optionSelect(option)} className="unhide-icon" />
			</div>)}
			{!data.length && <h1>No city is hidden</h1>}
		</div>
	)
};

export default OptionList;
