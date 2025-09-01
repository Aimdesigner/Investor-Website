import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Advice from './pages/Advice';
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advice" element={<Advice />} />
        </Routes>
      </MainLayout>
    </GoogleOAuthProvider>
  );
}

export default App;
