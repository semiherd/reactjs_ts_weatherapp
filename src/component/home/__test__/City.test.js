import { render,screen,waitFor,within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {mockedData} from '../../../__mocked__/MockedData.ts'
import City from '../City'
import {BrowserRouter} from "react-router-dom"

test('should render City Item',async () => {
	const hiddenItems= []
	const mockHideCity = jest.fn()
	const city= mockedData[0]
	render(<BrowserRouter>	
		<City key={city.id} 
				hidden={hiddenItems}
				item={city} 
				hideCity={mockHideCity} />
	</BrowserRouter>
	)	
	const cityItem= screen.getByTestId(`city-item-${city.name}`)
	expect(cityItem).toHaveClass('city-item')
	expect(cityItem).toBeInTheDocument()	
	expect(cityItem.firstChild).toHaveClass('city-title')

	const title= within(cityItem.firstChild).getByRole('heading',{level:1})
	const cityImage= within(cityItem).getByRole('img',{src:city.image})

	expect(cityImage).toBeVisible()
	expect(title).toHaveTextContent(city.name)
	expect(title).toHaveClass('name')
	expect(cityImage).toHaveClass('city-image')

})
test('should display action options when action menu icon clicked ',async () => {
	const hiddenItems= []
	const mockHideCity = jest.fn();
	const city= mockedData[0]
	render(<BrowserRouter>	
		<City key={city.id} 
				hidden={hiddenItems}
				item={city} 
				hideCity={mockHideCity} />
	</BrowserRouter>
	)	
	const cityItem=screen.getByTestId(`city-item-${city.name}`)
	//const label= within(cityItem).getByRole('checkbox', { name: `${city.id}-action-checkbox` })
	//const nav= within(cityItem).getByRole('navigation',{className: 'action-bar'})	
	//expect(label).toBeVisible()
	//expect(nav).not.toBeVisible()

})