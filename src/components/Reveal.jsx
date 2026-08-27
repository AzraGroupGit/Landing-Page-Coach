import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap.js'
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion.js'

export default function Reveal({ children, className = '', delay = 0, y = 44 }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!ref.current) return
      if (reduced) {
        gsap.set(ref.current, { clearProps: 'all' })
        return
      }
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 86%', once: true },
        },
      )
    },
    { dependencies: [reduced], scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
