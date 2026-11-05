import { MENU } from '../data/menu.js'

function DishCard({ item, isLoggedIn, onOrder }) {
  return (
    <article className="card dish">
      <img className="dish-img" src={item.img} alt={item.name} loading="lazy" />
      <h3>{item.name}</h3>
      <p className="muted">{item.desc}</p>
      <div className="dish-footer">
        <span className="price">${item.price}</span>
        <button className="btn btn-small" onClick={() => onOrder(item)}>
          {isLoggedIn ? 'Pedir' : 'Entra pa pedir'}
        </button>
      </div>
    </article>
  )
}

export default function MenuSection({ user, onOrder }) {
  return (
    <section>
      <h2>El menú del gallinero</h2>
      <div className="menu">
        {MENU.map((item) => (
          <DishCard key={item.name} item={item} isLoggedIn={Boolean(user)} onOrder={onOrder} />
        ))}
      </div>
    </section>
  )
}
