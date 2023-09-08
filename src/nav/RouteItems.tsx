import {RouteItemProps} from '../type'
import {Home} from '../screen/Home'
import {CityDetail} from '../screen/CityDetail'

export const RouteItems:Array<RouteItemProps> = [
	{
		path: '/',
		title: 'Home',
		content:(<Home />),
		exact: true,
	},
	{
		path: '/city/:id',
		title: 'Detail',
		content:(<CityDetail />),
		exact: true,
	}
]
