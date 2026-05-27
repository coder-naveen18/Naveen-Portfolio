import { useEffect, useRef } from 'react'

// ── Scroll Reveal ──────────────────────────────────────────────────────────────
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ── Typewriter ─────────────────────────────────────────────────────────────────
export function useTypewriter(roles: string[], elId: string) {
  useEffect(() => {
    const el = document.getElementById(elId)
    if (!el) return
    el.innerHTML = '<span id="tw-span"></span><span class="typewriter-cursor"></span>'
    const tw = document.getElementById('tw-span')!
    let ri = 0, ci = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>
    function type() {
      const word = roles[ri]
      if (!deleting) {
        tw.textContent = word.slice(0, ++ci)
        if (ci === word.length) { deleting = true; timer = setTimeout(type, 1800); return }
      } else {
        tw.textContent = word.slice(0, --ci)
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length }
      }
      timer = setTimeout(type, deleting ? 45 : 90)
    }
    timer = setTimeout(type, 800)
    return () => clearTimeout(timer)
  }, [roles, elId])
}

// ── Particle Canvas ────────────────────────────────────────────────────────────
export function useParticles(canvasId: string, heroId: string) {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let pw = 0, ph = 0, animId = 0

    function resize() {
      pw = canvas!.width  = canvas!.offsetWidth
      ph = canvas!.height = canvas!.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    document.addEventListener('mousemove', onMouseMove)

    class Particle {
      x: number; y: number; vx: number; vy: number
      r: number; o: number; life: number; age: number
      constructor() {
        this.x = Math.random() * pw; this.y = Math.random() * ph
        this.vx = (Math.random() - .5) * .35; this.vy = (Math.random() - .5) * .35
        this.r = Math.random() * 1.5 + .5; this.o = Math.random() * .5 + .1
        this.life = Math.random() * 200 + 100; this.age = 0
      }
      update() {
        this.x += this.vx; this.y += this.vy; this.age++
        if (this.x < 0) this.x = pw; if (this.x > pw) this.x = 0
        if (this.y < 0) this.y = ph; if (this.y > ph) this.y = 0
      }
      draw() {
        const fade = Math.min(this.age / 30, 1) * Math.min(1, (this.life - this.age) / 30)
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167,139,250,${this.o * fade})`; ctx.fill()
      }
    }

    const particles: Particle[] = Array.from({ length: 120 }, () => new Particle())

    function animP() {
      ctx.clearRect(0, 0, pw, ph)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.strokeStyle = `rgba(167,139,250,${.12 * (1 - dist / 100)})`
            ctx.lineWidth = .5; ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke()
          }
        }
        particles[i].update(); particles[i].draw()
        if (particles[i].age > particles[i].life) particles[i] = new Particle()
      }
      const heroEl = document.getElementById(heroId)
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect()
        const { x: mx, y: my } = mouseRef.current
        if (mx > rect.left && mx < rect.right && my > rect.top && my < rect.bottom) {
          particles.forEach(p => {
            const dx = mx - p.x, dy = my - p.y, dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 140) { p.vx += dx / dist * .04; p.vy += dy / dist * .04 }
            const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
            if (spd > .8) { p.vx /= spd * .8; p.vy /= spd * .8 }
          })
        }
      }
      animId = requestAnimationFrame(animP)
    }
    animP()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [canvasId, heroId])
}

// ── Infinite Marquee ───────────────────────────────────────────────────────────
export function useInfiniteMarquee(wrapId: string, trackId: string, speed = 0.7) {
  useEffect(() => {
    const wrap = document.getElementById(wrapId)
    const track = document.getElementById(trackId)
    if (!wrap || !track) return
    let x = 0, animId = 0
    function loop() {
      x -= speed
      const w = track!.offsetWidth + 16
      if (Math.abs(x) >= w) x = 0
      wrap!.style.transform = `translateX(${x}px)`
      animId = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(animId)
  }, [wrapId, trackId, speed])
}
