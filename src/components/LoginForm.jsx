export default function LoginForm({
  error,
  isRegister,
  loading,
  name,
  onBack,
  password,
  setName,
  setPassword,
  setUsername,
  submit,
  switchMode,
  username,
}) {
  return (
    <form className="card login-card" onSubmit={submit}>
      <img
        src="https://images.pexels.com/photos/17462036/pexels-photo-17462036.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
        alt="Pollo rostizado entero servido en un plato"
        className="login-photo"
      />
      <h1>{isRegister ? '¡Únete al gallinero!' : '¡Entra al gallinero!'}</h1>
      <p className="muted">
        {isRegister
          ? 'Crea tu cuenta y pide pollo como se debe.'
          : 'Identifícate, que aquí no entra cualquier gallo.'}
      </p>

      {isRegister && (
        <label>
          Nombre de pollito
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ej. Don Cacareo"
            autoComplete="name"
          />
        </label>
      )}
      <label>
        Usuario
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Ej. doncacareo"
          autoComplete="username"
          autoCapitalize="none"
        />
      </label>
      <label>
        Contraseña secreta
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Nada de 'pollo123' eh"
          autoComplete={isRegister ? 'new-password' : 'current-password'}
        />
      </label>

      {error && <p className="error">{error}</p>}

      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? 'Cacareando...' : isRegister ? 'Crear cuenta' : 'Kikirikí, entrar'}
      </button>
      <button className="btn btn-link" type="button" onClick={switchMode}>
        {isRegister ? '¿Ya tienes cuenta? Entra' : '¿Nuevo en el corral? Regístrate'}
      </button>
      <button className="btn btn-link" type="button" onClick={onBack}>← Regresar al corral</button>
    </form>
  )
}
