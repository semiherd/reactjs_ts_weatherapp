import {ListProps} from '../../type';

function ListItems<TItem>(props: ListProps<TItem>):JSX.Element{
	return (
		<div className="city-list" data-testid="city-list">
			{props.data.map((item) => props.renderItem(item))}
		</div>
	)
}

export default ListItems;
