import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
