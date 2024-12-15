// src/App.tsx
import Layout from './components/Layout'
// import { ThemeProvider } from './context/ThemeContext'

// import { useState } from 'react'
// import Protected from './components/Protected'
import Public from './components/Public'
import useAuth from './hooks/useAuth'

function App() {
  const [isLogin,username]  = useAuth()
  console.log('logger in user is:')
  console.log(username);
  return isLogin? <Layout name={username} /> : <Public />
}

export default App


