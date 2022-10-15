import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route >
            <Route exec path="/" element={<ProfileForm />} />
            <Route exec path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;