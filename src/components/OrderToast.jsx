export default function OrderToast({ itemName }) {
  if (!itemName) return null
  return <div className="toast">¡Marchando un {itemName}!</div>
}
