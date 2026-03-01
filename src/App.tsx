import { useState, useEffect, useMemo } from 'react'
import { ThemeProvider, CssBaseline, Button, Container, Typography, Box, Card, IconButton, useMediaQuery } from '@mui/material'
import { Brightness4, Brightness7, RocketLaunch, ColorLens } from '@mui/icons-material'
import { lightTheme, darkTheme } from './styles/theme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') return saved
    }
    return prefersDarkMode ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.setItem('theme', mode)
  }, [mode])

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-container" sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all 0.3s ease'
      }}>
        <Container maxWidth="lg">
          <header className="app-header">
            <IconButton onClick={toggleTheme} color="inherit" sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { transform: 'rotate(15deg) scale(1.1)' }
            }}>
              {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </header>

          <main>
            <Box className="hero" sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h1" gutterBottom sx={{
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}>
                Material UI + <br /> Premium Design
              </Typography>
              <Typography variant="h6" className="subtitle" sx={{ opacity: 0.8, maxWidth: 600, mx: 'auto', mb: 6 }}>
                The power of MUI meets the elegance of our custom design system. Fully themed, responsive, and performance-ready.
              </Typography>
            </Box>

            <Card className="glass-card" sx={{
              maxWidth: 500,
              mx: 'auto',
              p: { xs: 3, md: 5 },
              borderRadius: 6,
              background: mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 'var(--surface-shadow)',
              textAlign: 'center'
            }}>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <RocketLaunch color="primary" sx={{ fontSize: 40 }} />
                <ColorLens color="secondary" sx={{ fontSize: 40 }} />
              </Box>

              <Typography variant="h4" fontWeight={700} gutterBottom>
                Atomic Integration
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                This card uses MUI components styled with our custom theme. Click below to see the state in action.
              </Typography>

              <Box className="actions" sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setCount((c) => c + 1)}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    fontWeight: 700
                  }}
                >
                  Explore Count: {count}
                </Button>
              </Box>

              <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 2, display: 'inline-block' }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
                  src/App.tsx (MUI Components Active)
                </Typography>
              </Box>
            </Card>
          </main>

          <footer className="app-footer">
            <Typography variant="body2" align="center" sx={{ py: 6, opacity: 0.6 }}>
              © {new Date().getFullYear()} WebApp Front • Built with MUI & Passion
            </Typography>
          </footer>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
