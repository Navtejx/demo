import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Simplified version without ScrollTrigger to avoid SSR issues
export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element || typeof window === 'undefined') return

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    )

    return () => {
      animation.kill()
    }
  }, [])

  return elementRef
}

export function useStaggerAnimation(selector: string, delay: number = 0.1) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || typeof window === 'undefined') return

    const elements = container.querySelectorAll(selector)
    
    const animation = gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: delay,
      }
    )

    return () => {
      animation.kill()
    }
  }, [selector, delay])

  return containerRef
}

export function useCounterAnimation(endValue: number, duration: number = 2) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element || typeof window === 'undefined') return

    const counter = { value: 0 }
    
    const animation = gsap.to(counter, {
      value: endValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (element) {
          element.textContent = Math.floor(counter.value).toString()
        }
      },
    })

    return () => {
      animation.kill()
    }
  }, [endValue, duration])

  return elementRef
}
