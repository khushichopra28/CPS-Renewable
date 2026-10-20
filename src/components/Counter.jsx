import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Counter({
  endValue = 0,
  startValue = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  isString = false,
  stringValue = '',
  className = '',
}) {
  const [current, setCurrent] = useState(startValue)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isString || shouldReduceMotion) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted, isString, shouldReduceMotion])

  useEffect(() => {
    if (!hasStarted || isString || shouldReduceMotion) return

    let startTime = null
    const numEnd = Number(endValue) || 0
    const numStart = Number(startValue) || 0

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const value = Math.round(numStart + (numEnd - numStart) * easeProgress)
      setCurrent(value)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [hasStarted, endValue, startValue, duration, isString, shouldReduceMotion])

  if (isString) {
    return <span className={className}>{stringValue}</span>
  }

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {prefix}
        {Number(endValue).toLocaleString('en-IN')}
        {suffix}
      </span>
    )
  }

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {current.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
