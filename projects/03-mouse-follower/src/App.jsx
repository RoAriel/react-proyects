import { useEffect, useState } from 'react'
import './App.css'

const FollowMause = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) { window.addEventListener('pointermove', handleMove) }

    return () => {
      console.log('Limpio efectos');
      
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])
  return (
    <>
      <div style={
        {
          position: 'absolute',
          backgroundColor: '#09f',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      }>

      </div>
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {

  return (
    <main>
      <FollowMause/>
    </main>
  )
}
export default App
