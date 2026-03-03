import { useSelector } from 'react-redux';
import type { RootState } from './store';
import { useEffect } from 'react';
import { useCheckAuth } from './hooks/useCheckAuth';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './styles/theme';
import LandingPage from './pages/LandingPage';
import FeedPage from './pages/FeedPage';
import './App.css';

function App() {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { checkAuth } = useCheckAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {!isAuth ? (
        <LandingPage />
      ) : (
        <FeedPage />
      )}
    </ThemeProvider>
  );
}

export default App;
