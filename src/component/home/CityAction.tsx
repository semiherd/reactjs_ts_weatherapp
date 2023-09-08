import '../../style/CityAction.css'
import {CityActionProp} from '../../type'

const CityAction= (props:CityActionProp):JSX.Element => {
	const {hideCity}= props

	const handleAction= (item:string) => {
		hideCity(item)
		const checkBoxId= `${item}-action-checkbox`
		const elm = document.getElementById(checkBoxId) as HTMLInputElement| null;
		elm!.checked = false;
	}

	return(
			<div id="action"> 
				<label className="city-action">
					<input data-testid={`${props.id}-action-checkbox`} type="checkbox" />
				</label>
				<nav className="action-bar">
					<div onClick={() => handleAction(props.id)}>Hide</div>
				</nav>
			</div>
	)
}

export default CityAction