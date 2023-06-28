import React, { useEffect, useState } from 'react'
import { ArrowUp } from '@phosphor-icons/react'

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const buttonClassName = `fixed bottom-5 right-5 z-10 items-center justify-center rounded-full bg-zinc-900 p-3 transition-colors hover:bg-zinc-800 ${
    isVisible ? 'flex' : 'hidden'
  }`

  return (
    <button className={buttonClassName} onClick={scrollToTop}>
      <ArrowUp weight="bold" className="h-5 w-5 fill-zinc-100" />
    </button>
  )
}
