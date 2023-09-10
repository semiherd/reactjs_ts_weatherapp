import React,{useEffect} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Container} from './nav/Container'
import { RouteItems } from './nav/RouteItems';

function App() {
  
  useEffect(() => {
    //navigator.serviceWorker.register('/sw.js')
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {RouteItems.map (routeItem => (
            <Route
              path={routeItem.path}
              element= {<Container content={routeItem.content} />}
              key={routeItem.title}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
