export default function SiteHeader({ user, onLoginClick, onLogout }) {
  return (
    <header className="nav">
      <div className="brand">
        <img
          src="https://images.pexels.com/photos/6896080/pexels-photo-6896080.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop"
          alt=""
        />
        <span>Ni Pío</span>
      </div>
      {user ? (
        <div className="nav-user">
          <span className="hello">¡Quiubo, {user.name}!</span>
          <button className="btn btn-ghost" onClick={onLogout}>Salir del corral</button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={onLoginClick}>Entrar</button>
      )}
    </header>
  )
}
