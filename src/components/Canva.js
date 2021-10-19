import { useRef, useEffect } from 'react'

const Canva = props => {
    const { draw, ...rest } = props
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let frameCount = 0
        let animationFrameId

    //Our draw came here
    const render = () => {
        frameCount++
        draw(context, frameCount)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      }, [draw])

    return (
        <canvas className="Canva" id="Canva" ref={canvasRef}  {...rest}/>
      )
  }
export default Canva