import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <main>
        <div className="hero">
          <h1>Modern. Sleek. <br /><span>High Performance.</span></h1>
          <p className="subtitle">
            Experience the future of web development with Vite, React, and Antigravity's Premium Design System.
          </p>
        </div>

        <div className="card">
          <h2>Level Up Your App</h2>
          <p>
            This project is initialized with TypeScript, strict linting, and a high-end CSS architecture.
          </p>
          <div className="actions">
            <button className="primary-btn" onClick={() => setCount((count) => count + 1)}>
              The Count is {count}
            </button>
          </div>
          <footer className="card-footer">
            <p>
              Edit <code>src/App.tsx</code> to start building your masterpiece.
            </p>
          </footer>
        </div>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} WebApp Front • Built with Passion</p>
      </footer>
    </div>
  )
}

export default App
