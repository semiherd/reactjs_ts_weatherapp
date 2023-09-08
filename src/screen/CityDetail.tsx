import { useNavigate, useLocation } from 'react-router-dom'
import { InfoItemProps } from '../type';
import '../style/Detail.css'
import BackButton from '../component/detail/BackButton'
import InfoItem from '../component/detail/InfoItem'
import {sortByKey} from '../service/index'

export const CityDetail = () => {
	const navigate = useNavigate()
	const {state}= useLocation()
	const sortedDates:InfoItemProps[]= state?.data?.sort((a:InfoItemProps, b:InfoItemProps) => {
		const nameA:string= a.date
		const nameB:string= b.date	
		return nameA < nameB? -1 : nameA > nameB? 1 : 0
	})
	return (
		<div className="detail-page" data-test-id={`${state.name}-detail-page`}>
			<BackButton text="Back" onClick={() => navigate(-1)}/>
			<div>
				<div className="detail-left" data-testid={`detail`}>
					{state && <img className="city-detail-image" src={state.image} alt={state.id} />}
				</div>
				<div className="detail-right">
					{state.name	 && <h5 className="name">{state.name}</h5>}
					<div className="temp-list">
						{sortedDates && sortedDates.map((item:InfoItemProps,index:number) => <InfoItem key={index.toString()} date={item.date} c={item.c} />)}						
					</div>
				</div>
			</div>
		</div>
	)
};

