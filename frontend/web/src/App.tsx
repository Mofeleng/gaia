import './App.css'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <main>
          Hello world
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
