import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PokemonStatus from './components/PokemonStatus'
import Pokedex from './components/Pokedex'
import Header from './components/Header'
import Home from './components/Home'
import Contato from './components/Contato'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/pokedex">Pokedex</Link>
        </li>
        <li>
          <Link to="/Contato">Contato</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/pokedex" element={<Pokedex/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
