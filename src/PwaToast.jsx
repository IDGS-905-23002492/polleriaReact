import { useRegisterSW } from 'virtual:pwa-register/react'

export default function PwaToast() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  if (!offlineReady && !needRefresh) return null

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className="toast pwa-toast" role="status">
      <span>
        {needRefresh
          ? '¡Salió pollo recién hecho! Hay una versión nueva.'
          : 'Listo: ya puedes usar Ni Pío sin internet.'}
      </span>
      {needRefresh && (
        <button className="btn btn-small" onClick={() => updateServiceWorker(true)}>
          Actualizar
        </button>
      )}
      <button className="btn btn-small" onClick={close}>Ok</button>
    </div>
  )
}
