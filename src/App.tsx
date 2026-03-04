import { useSelector } from 'react-redux';
import type { RootState } from './store';
import { useEffect } from 'react';
import { useCheckAuth } from './hooks/useCheckAuth';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './styles/theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FeedPage from './pages/FeedPage';
import DiscoverPage from './pages/DiscoverPage';
import AddReviewPage from './pages/AddReviewPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  useCheckAuth();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={isAuth ? <Navigate to="/feed" /> : <LandingPage />} />

          {/* Protected Routes */}
          <Route path="/feed" element={isAuth ? <FeedPage /> : <Navigate to="/" />} />
          <Route path="/discover" element={isAuth ? <DiscoverPage /> : <Navigate to="/" />} />
          <Route path="/add-review" element={isAuth ? <AddReviewPage /> : <Navigate to="/" />} />
          <Route path="/profile" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
