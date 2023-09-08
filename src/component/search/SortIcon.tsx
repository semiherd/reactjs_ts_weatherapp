import {useEffect} from "react"
import {sortByKey} from '../../service/SortArray'
import {SortIconProps} from '../../type'
import { FaSortAlphaDown,FaSortAlphaDownAlt } from "react-icons/fa";

const SortIcon = (props:SortIconProps):JSX.Element => {

	const {setSorting,setVisible,sorting,arr}= props

	const handleSort= ():void => {
		const sorted= sortByKey(arr, "name",sorting)
		setVisible([...sorted])
	}
	const updateSort= ():void => {
		setSorting(prev=> prev=='asc'? 'desc':'asc')
	}

	useEffect(() => {
		handleSort()
	},[sorting])

	return (
		<div className="sort-item" data-testid="sort-item">	
			<span onClick={() => updateSort()} >
				{sorting=='asc' && <FaSortAlphaDown className="sort-icon" />}
				{sorting=='desc' && <FaSortAlphaDownAlt className="sort-icon" />}	
			</span>
		</div>
	)	
}

export default SortIcon;
