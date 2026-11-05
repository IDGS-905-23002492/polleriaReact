export default function HeroSection({ user, onLoginClick }) {
  return (
    <section className="hero">
      <img
        src="https://images.pexels.com/photos/17462036/pexels-photo-17462036.jpeg?auto=compress&cs=tinysrgb&w=640&h=640&fit=crop"
        alt="Pollo rostizado entero servido en un plato"
        className="hero-chicken"
        fetchPriority="high"
      />
      <h1>Pollería <span className="accent">Ni Pío</span></h1>
      <p className="tagline">Tan rico que te quedas sin decir ni pío</p>
      {user ? (
        <p className="welcome">Ya estás en el gallinero, <b>{user.name}</b>. ¡Pide sin miedo!</p>
      ) : (
        <button className="btn btn-primary btn-big" onClick={onLoginClick}>
          ¡Quiero mi pollo!
        </button>
      )}
    </section>
  )
}
