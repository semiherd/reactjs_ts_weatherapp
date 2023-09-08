import { ContainerProps } from '../type'

export const Container= ({content}:ContainerProps):JSX.Element => {
	return (
		<div>
			{content}
		</div>
	)
}