import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Products from './pages/Products';
import AppLayout from './ui/AppLayout';
// import { useEffect, useState } from 'react';

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('access_token');
  //   setIsLoggedIn(accessToken ? true : false);
  // }, []);

  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="products" />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
