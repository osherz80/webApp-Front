import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './styles/theme';
import LandingPage from './pages/LandingPage';
import FeedPage from './pages/FeedPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {!isAuthenticated ? (
        <LandingPage onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <FeedPage />
      )}
    </ThemeProvider>
  );
}

export default App;
