import { useRef, useEffect, useState } from 'react'
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const Canva = props => {
    const { draw, ...rest } = props
    const canvasRef = useRef(null)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const { height, width } = windowDimensions

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
        window.addEventListener('resize', handleResize);
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)
      }, [draw])

    return (
        <canvas className="Canva" id="Canva" ref={canvasRef}  {...rest} width={width} height={height} />
      )
  }
export default Canva