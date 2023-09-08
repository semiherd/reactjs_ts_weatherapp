import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { render, screen,within,waitFor,fireEvent, } from '@testing-library/react';
import {mockedData} from '../../__mocked__/MockedData.ts'
import City from '../../component/home/City'
import {Container} from '../Container'
import {RouteItems} from '../RouteItems'

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUseNavigate
}));

it('routes to a new city-detail route', async () => {
	const mockedCity= mockedData[0]	
	const hiddenItems=[]
	const mockHideCity = jest.fn();
  render(
    <BrowserRouter >
      <City key={mockedCity.id} 
					hidden={hiddenItems}
					item={mockedCity} 
					hideCity={mockHideCity} />
    </BrowserRouter>
  );
	
	const cityItem= screen.getByTestId(`city-item-${mockedCity.name}`)
	const cityImage= within(cityItem).getByRole('img',{src:mockedCity.image})
  expect(cityImage).toBeInTheDocument();
  fireEvent.click(cityImage);	
	expect(mockedUseNavigate).toHaveBeenCalledWith(`/city/${mockedCity.id}`,{state:mockedCity})	
})

it('routes back to home route', async () => {
		render(
			<BrowserRouter>
        <Routes>
          <Route
              path={RouteItems[1].path}
              element= {<Container content={RouteItems[1].content} />}
              key={RouteItems[1].title}
            />
        </Routes>
      </BrowserRouter>
		);
	
		fireEvent.click(screen.getByTestId('back-button'));
		expect(mockedUseNavigate).toHaveBeenCalledWith('');
})
