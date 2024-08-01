import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};

const MainApp: React.FC = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default MainApp;
