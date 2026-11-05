import { useState } from 'react'
import { loginUser, registerUser } from '../db.js'

export function useLoginForm({ onLogin }) {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const isRegister = mode === 'register'

  const switchMode = () => {
    setMode((currentMode) => (currentMode === 'register' ? 'login' : 'register'))
    setError('')
  }

  const submit = async (event) => {
    event.preventDefault()
    if (isRegister && !name.trim()) return setError('¿Y tu nombre? Hasta los pollos tienen nombre')
    if (!username.trim()) return setError('Falta tu usuario, pollito')
    if (password.length < 4) return setError('Contraseña muy corta, como patita de pollo (mínimo 4)')

    setLoading(true)
    setError('')
    try {
      const user = isRegister
        ? await registerUser({ username, name, password })
        : await loginUser(username, password)
      onLogin(user)
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    error,
    isRegister,
    loading,
    name,
    password,
    setName,
    setPassword,
    setUsername,
    submit,
    switchMode,
    username,
  }
}
