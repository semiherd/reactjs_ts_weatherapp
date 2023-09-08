import React from "react"
import { FaArrowLeft } from "react-icons/fa";
import {BackButtonProps} from '../../type'
import '../../style/BackButton.css'

const BackButton = ({text,onClick}:BackButtonProps):JSX.Element => {
	
	return (
		<div onClick={() => onClick()} className="back-button" data-testid="back-button">
			<FaArrowLeft className="icon" />
			<h1 className="text" >BACK</h1>
		</div>
	)
}
export default BackButton;

