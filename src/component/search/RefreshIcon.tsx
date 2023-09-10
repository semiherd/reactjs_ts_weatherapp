import { FcRefresh } from "react-icons/fc";
import { RefreshIconProps} from '../../type'

const RefreshIcon = (props:RefreshIconProps):JSX.Element => {

	const handleRefresh= ():void => props.refreshFn()

	return (
		<div className="refresh-item" data-testid="refresh-item">	
			<span onClick={() => handleRefresh()} >
				<FcRefresh className="refresh-icon" />
			</span>
		</div>
	)	
}

export default RefreshIcon;
