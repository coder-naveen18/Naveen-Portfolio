import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor')!
    const ring = document.getElementById('cursorRing')!
    const blob = document.getElementById('mouseBlob')!
    let mx = 0, my = 0, rx = 0, ry = 0, animId = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      blob.style.left = mx + 'px'; blob.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    function loop() {
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
      rx += (mx - rx) * .15; ry += (my - ry) * .15
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      animId = requestAnimationFrame(loop)
    }
    loop()

    const targets = 'a,button,.skill-tag,.exp-card,.project-card,.cert-card,.contact-card,.stat-cell'
    const addHover = () => {
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', () => { cur.classList.add('hov'); ring.classList.add('hov') })
        el.addEventListener('mouseleave', () => { cur.classList.remove('hov'); ring.classList.remove('hov') })
      })
    }
    addHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div className="mouse-blob" id="mouseBlob" />
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
