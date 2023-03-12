import Shape, { ShapeProps } from "./components/shape/shape"

const colors = {
  1: "#264653",
  2: "#2A9D8F",
  3: "#E9C46A",
  4: "#F4A261",
  5: "#E76F51",
  6: "#EC8C74",
  7: "#f5c4b7"
}

const shapesArray1: ShapeProps[] = [
  { id: "1eds", color: colors[7], size: "small", radius: "none", top: "0%", left: "0%" },
  { id: "2fd", color: colors[2], size: "small", radius: "none", top: "50%", left: "62%" },
  { id: "3dze", color: colors[3], size: "medium", radius: "none", top: "50%", left: "0%" },
  { id: "4ngn", color: colors[4], size: "medium", radius: "none", top: "0%", left: "38%" }
]

const shapesArray2: ShapeProps[] = [
  { id: "5cxwc", color: colors[5], size: "extraSmall", radius: "none", top: "0%", left: "0%" },
  { id: "6cvz", color: colors[6], size: "medium", radius: "none", top: "0%", left: "0%" },
  { id: "7nvbf", color: colors[1], size: "large", radius: "none", top: "0%", left: "0%" }
]

function App() {
  return (
    <div className='App'>
      <div className='box1'>
        {shapesArray1.map((shape) => (
          <Shape key={shape.id} {...shape} />
        ))}
      </div>
      <div className='box2'>
        {shapesArray2.map((shape) => (
          <Shape key={shape.id} {...shape} />
        ))}
      </div>
    </div>
  )
}

export default App
