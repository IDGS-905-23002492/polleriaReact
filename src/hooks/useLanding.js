import { useEffect, useState } from 'react'
import { JOKES } from '../data/menu.js'

export function useLanding({ user, onLoginClick }) {
  const [jokeIndex, setJokeIndex] = useState(0)
  const [orderedItem, setOrderedItem] = useState(null)

  useEffect(() => {
    if (!orderedItem) return undefined
    const timeoutId = window.setTimeout(() => setOrderedItem(null), 2500)
    return () => window.clearTimeout(timeoutId)
  }, [orderedItem])

  const nextJoke = () => setJokeIndex((index) => (index + 1) % JOKES.length)

  const order = (item) => {
    if (!user) {
      onLoginClick()
      return
    }
    setOrderedItem(item.name)
  }

  return { joke: JOKES[jokeIndex], nextJoke, order, orderedItem }
}
