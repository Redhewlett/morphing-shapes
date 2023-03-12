import { useEffect, useState } from "react"
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

// positions with top and left depending on width and height of the shapes
// for the height => 100% - height
// for the width => 100% - width

const shapesArray1: ShapeProps[] = [
  { id: "1eds", color: colors[7], size: "small", radius: "0%", top: "0%", left: "0%" },
  { id: "2fd", color: colors[2], size: "small", radius: "0%", top: "50%", left: "62.5%" },
  { id: "3dze", color: colors[5], size: "medium", radius: "0%", top: "50%", left: "0%" },
  { id: "4ngn", color: colors[4], size: "medium", radius: "0%", top: "0%", left: "37.5%" }
]

const shapesArray2: ShapeProps[] = [
  { id: "5cxwc", color: colors[3], size: "extraSmall", radius: "0%", top: "75%", left: "75%" },
  { id: "6cvz", color: colors[6], size: "medium", radius: "0%", top: "50%", left: "37.5%" },
  { id: "7nvbf", color: colors[1], size: "large", radius: "0%", top: "0%", left: "0%" }
]

const radiuses = ["0%", "2rem", "0 0 0 10rem", "4rem 0 0 0", "0 10rem  0 0", "0  10rem 10rem 0"]

function changeRadius(shape: ShapeProps): ShapeProps {
  const { radius } = shape
  let newValue: ShapeProps
  let randomIndex = Math.floor(Math.random() * radiuses.length)
  if (radius === radiuses[randomIndex]) {
    randomIndex = Math.floor(Math.random() * radiuses.length)
  }
  newValue = { ...shape, radius: radiuses[randomIndex] }
  return newValue
}

function App() {
  const [groupe1, setGroupe1] = useState(shapesArray1)
  const [groupe2, setGroupe2] = useState(shapesArray2)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setGroupe1(groupe1.map((shape) => changeRadius(shape)))
      setGroupe2(groupe2.map((shape) => changeRadius(shape)))
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [groupe1, groupe2])

  return (
    <div className='App'>
      <div className='box1'>
        {groupe1.map((shape) => (
          <Shape key={shape.id} {...shape} />
        ))}
      </div>
      <div className='box2'>
        {groupe2.map((shape) => (
          <Shape key={shape.id} {...shape} />
        ))}
      </div>
    </div>
  )
}

export default App
