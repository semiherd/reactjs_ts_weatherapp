import {InfoItemProps} from '../../type'
import {dayFormat} from '../../service/index'

const InfoItem = ({c,date}: InfoItemProps) => {	
	
	return (
		<div className="info-item">
			<h2>{dayFormat(date).day} </h2>		
			<h2>{dayFormat(date).time} </h2>		
			<h2>{c}°C </h2>		
		</div>
	)
}
export default InfoItem;