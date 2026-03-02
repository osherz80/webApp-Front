import { useSelector } from 'react-redux';
import type { RootState } from './store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './styles/theme';
import LandingPage from './pages/LandingPage';
import FeedPage from './pages/FeedPage';
import './App.css';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {!isAuthenticated ? (
        <LandingPage />
      ) : (
        <FeedPage />
      )}
    </ThemeProvider>
  );
}

export default App;
