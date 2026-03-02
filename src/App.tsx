import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './styles/theme';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
