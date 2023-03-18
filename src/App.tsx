import { useEffect, useState } from "react"
import Shape, { ShapeProps } from "./components/shape/shape"
// variables and functions
import { changeAllRadiusRandomly, changeAllRadiusesToZero, changeAllRadiusesToMax } from "./functions/radiuses"
import { colors, baseSizes, squareSizes } from "./variables/shapesVariables"

// positions with top and left depending on width and height of the shapes
// for the height => 100% - height
// for the width => 100% - width

const shapesArray1: ShapeProps[] = [
  { pos: "1", id: "1eds", color: colors[7], size: baseSizes["small"], radius: "0%", top: "0%", left: "0%" },
  { pos: "1", id: "2fd", color: colors[2], size: baseSizes["small"], radius: "0%", top: "50%", left: "62.5%" },
  { pos: "0", id: "3dze", color: colors[5], size: baseSizes["medium"], radius: "0%", top: "50%", left: "0%" },
  { pos: "0", id: "4ngn", color: colors[4], size: baseSizes["medium"], radius: "0%", top: "0%", left: "37.5%" }
]

const shapesArray2: ShapeProps[] = [
  { pos: "2", id: "5cxwc", color: colors[3], size: baseSizes["extraSmall"], radius: "0%", top: "75%", left: "75%" },
  { pos: "1", id: "6cvz", color: colors[6], size: baseSizes["medium"], radius: "0%", top: "50%", left: "37.5%" },
  { pos: "0", id: "7nvbf", color: colors[1], size: baseSizes["large"], radius: "0%", top: "0%", left: "0%" }
]

function App() {
  const [groupe1, setGroupe1] = useState(shapesArray1)
  const [groupe2, setGroupe2] = useState(shapesArray2)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setGroupe1(groupe1.map((shape) => changeAllRadiusesToMax(shape)))
      setGroupe2(groupe2.map((shape) => changeAllRadiusesToMax(shape)))
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
