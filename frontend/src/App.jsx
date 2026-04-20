import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route index element={<h1>Tittel</h1>} />
      <Route path='/test' element={<h1>Route test</h1>} />
    </Routes>
      
  )
}

export default App
