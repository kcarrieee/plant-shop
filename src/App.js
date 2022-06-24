import Navbar from './components/Navbar'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { createContext } from "react"

export const SearchContext = createContext('')

function App() {
  const [search, setSearch] = useState('')

  
  return (
    <SearchContext.Provider value={{search, setSearch}}>
    <Router>
      <div className="app__wrapper">
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;
