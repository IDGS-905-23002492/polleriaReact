export default function JokeCard({ joke, onNext }) {
  return (
    <section className="joke card" onClick={onNext}>
      <p>{joke}</p>
      <small>(tócame para otro chiste malo)</small>
    </section>
  )
}
