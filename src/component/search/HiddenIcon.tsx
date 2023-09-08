import OptionList from './OptionList'
import {HiddenIconProps} from '../../type'
import '../../style/HiddenIcon.css'

const HiddenIcon= (props:HiddenIconProps):JSX.Element => {
	const {data,updateData}= props

	return(
		<div className="hidden-title" data-testid="hidden-items-block">
			<label className="hidden-label">
				<input type="checkbox" />
				<h1>{data.length? `Hidden Cities (${data.length})`:`All Cities Visible`}</h1> 
			</label>
			<nav className="hidden-items">
				<OptionList updateData={updateData} data={data} />
			</nav>
		</div> 
	)
}

export default HiddenIcon