import { render,screen,within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ListItems from '../List'
import {mockedData} from '../../../__mocked__/MockedData.ts'
import City from '../City'
import {BrowserRouter,Routes,Route} from "react-router-dom"

test('should render List component of city elements',async () => {
    const hiddenItems= []
		const mockHideCity = jest.fn();
		render(<BrowserRouter>	
			<ListItems
				data={mockedData} 
				renderItem={(item) => <City key={item.id} 
					hidden={hiddenItems}
					item={item} 
					hideCity={mockHideCity} />} 
			/>
		</BrowserRouter>
		)	
		const listDiv= screen.getByTestId('city-list')
		const cityItems= screen.getAllByTestId(/city-item-/)
		expect(listDiv).toHaveClass('city-list')

    Promise.all(cityItems.map(item=> expect(item).toHaveClass('city-item')))
		expect(listDiv).toBeInTheDocument()
		expect(cityItems.length).toEqual(mockedData.length)
})






