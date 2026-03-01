import { createTheme, type ThemeOptions } from '@mui/material/styles';

const baseThemeOptions: ThemeOptions = {
    typography: {
        fontFamily: "'Outfit', 'Inter', sans-serif",
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '10px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
};

export const lightTheme = createTheme({
    ...baseThemeOptions,
    palette: {
        mode: 'light',
        primary: {
            main: '#3b82f6', // Corresponds to hsl(220, 70%, 50%)
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
    },
});

export const darkTheme = createTheme({
    ...baseThemeOptions,
    palette: {
        mode: 'dark',
        primary: {
            main: '#60a5fa', // Lighter for dark mode
        },
        background: {
            default: '#0f172a',
            paper: '#1e293b',
        },
    },
});
