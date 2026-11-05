import { useLanding } from './hooks/useLanding.js'
import DeliverySection from './components/DeliverySection.jsx'
import HeroSection from './components/HeroSection.jsx'
import JokeCard from './components/JokeCard.jsx'
import MenuSection from './components/MenuSection.jsx'
import OrderToast from './components/OrderToast.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'

export default function Landing({ user, onLoginClick, onLogout }) {
  const { joke, nextJoke, order, orderedItem } = useLanding({ user, onLoginClick })

  return (
    <>
      <SiteHeader user={user} onLoginClick={onLoginClick} onLogout={onLogout} />
      <main>
        <HeroSection user={user} onLoginClick={onLoginClick} />
        <JokeCard joke={joke} onNext={nextJoke} />
        <MenuSection user={user} onOrder={order} />
        <DeliverySection />
      </main>
      <SiteFooter />
      <OrderToast itemName={orderedItem} />
    </>
  )
}
