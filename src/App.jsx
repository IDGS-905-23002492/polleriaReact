import { useState } from 'react'
import Landing from './Landing.jsx'
import Login from './Login.jsx'
import PwaToast from './PwaToast.jsx'
import { useAuth } from './hooks/useAuth.js'

export default function App() {
  const { user, login, logout } = useAuth()
  const [view, setView] = useState('landing')

  const handleLogin = (nextUser) => {
    login(nextUser)
    setView('landing')
  }

  return (
    <>
      {view === 'login' && !user ? (
        <Login onLogin={handleLogin} onBack={() => setView('landing')} />
      ) : (
        <Landing user={user} onLoginClick={() => setView('login')} onLogout={logout} />
      )}
      <PwaToast />
    </>
  )
}
