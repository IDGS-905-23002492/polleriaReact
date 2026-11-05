import { useLoginForm } from './hooks/useLoginForm.js'
import LoginForm from './components/LoginForm.jsx'

export default function Login({ onLogin, onBack }) {
  const form = useLoginForm({ onLogin })

  return (
    <main className="login-page">
      <LoginForm {...form} onBack={onBack} />
    </main>
  )
}
