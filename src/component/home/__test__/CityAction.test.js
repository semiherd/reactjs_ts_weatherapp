import { render,screen,fireEvent,waitFor,within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {mockedData} from '../../../__mocked__/MockedData.ts'
import CityAction from '../CityAction'

test('should render City Item',async () => {
	const hiddenItems= []
	const mockHideCity = jest.fn();
	const city= mockedData[0]
	render (<CityAction id={city.name} hideCity={mockHideCity} />)
	const nav= screen.getByRole('navigation',{className:'action-bar'})
	const checkbox = screen.getByTestId(`${city.name}-action-checkbox`)
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
	expect(nav).toBeVisible()
	expect(screen.getByText('Hide')).toBeVisible()

})