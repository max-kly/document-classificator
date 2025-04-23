import './assets/index.css'
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import History from './pages/History';
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/upload' element={<Upload />}></Route>
      <Route path='/history' element={<History />}></Route>
    </Routes>
  )
}

export default App
