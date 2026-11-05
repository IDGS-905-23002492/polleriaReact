export default function DeliverySection() {
  return (
    <section className="card delivery">
      <img
        src="https://images.pexels.com/photos/12203732/pexels-photo-12203732.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop"
        alt="Repartidor en motocicleta listo para entregar un pedido"
        loading="lazy"
        decoding="async"
      />
      <div>
        <h2>Entrega a domicilio</h2>
        <p className="muted">
          Nuestro repartidor es un pollo con casco. Llega rapidísimo porque no quiere
          que lo confundan con el pedido.
        </p>
      </div>
    </section>
  )
}
