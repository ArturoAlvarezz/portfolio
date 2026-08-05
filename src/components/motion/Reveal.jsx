import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion.js'

export function Reveal({ as: Element = 'div', className = '', children }) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const observerSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window
  const [visible, setVisible] = useState(!observerSupported)

  useEffect(() => {
    if (reducedMotion || !observerSupported) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8%' },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [observerSupported, reducedMotion])

  return (
    <Element ref={ref} className={`reveal ${visible || reducedMotion ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </Element>
  )
}
