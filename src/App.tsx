import { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './styles/theme';
import LandingPage from './pages/LandingPage';
import FeedPage from './pages/FeedPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Maintain login state on refresh
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {!isAuthenticated ? (
        <LandingPage onLogin={handleLoginSuccess} />
      ) : (
        <FeedPage />
      )}
    </ThemeProvider>
  );
}

export default App;
