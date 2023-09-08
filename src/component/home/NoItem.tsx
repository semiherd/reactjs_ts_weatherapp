import { TypeNoItem } from '../../type';
const NoItem = (props:TypeNoItem) => {

	return (
		<div className="no-item">
			<h5>{props.title}</h5>
		</div>
	)
};

export default NoItem;
