import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Import Data Provider
import { DataProvider } from './settings/DataContext'
// Custom Componentes imports
import Home from './pages/Home'
import MenuContainer from './organisms/MenuContainer'
import Offers from './organisms/Offers'
import Footer from './organisms/Footer'
import ProductBox from './pages/ProductBox'
import Favorites from './pages/Favorites'
import E404 from './pages/E404'
// CSS imports
import './templates/App.css'
import './templates/Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

  return (
    <div className="App">
      <Router>
        {/* Data provider */}
        <DataProvider>

          <div className="menu-meli h-100">
          {/* Menu container (logo, search and navbar) */}
            <MenuContainer />
          </div>
          <div className="ofertas-meli h-100 container-lg">
          {/* Offers List (navbar with icons) */}
            <Offers />
          </div>

          <div className="container-fluid home">
            <div className="container home pt-3">
                  <Switch>
                    <Route
                      exact
                      path='/'>
                      <Home />
                    </Route>
                    <Route
                      exact
                      path='/product/:id'>
                      <ProductBox />
                    </Route>
                    <Route
                      exact
                      path='/favorites'>
                      <Favorites />
                    </Route>
                    <Route
                      exact
                      path='*'>
                      <E404 />
                    </Route>
                  </Switch>
                </div>

              </div>
          <Footer />
        </DataProvider>
      </Router>
    </div>
  )
}

export default App
