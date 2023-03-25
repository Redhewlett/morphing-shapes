import { useEffect, useState } from "react"
import Shape, { ShapeProps } from "./components/shape/shape"
// variables and functions
import { changeAllRadiusRandomly, changeAllRadiusesToZero, changeAllRadiusesToMax } from "./functions/radiuses"
import { changeDisposition } from "./functions/positions"
import { colors, baseSizes, squareSizes } from "./variables/shapesVariables"

// positions with top and left depending on width and height of the shapes
// for the height => 100% - height
// for the width => 100% - width

const shapesArray1: ShapeProps[] = [
  { pos: "1", id: "left1", color: colors[7], size: baseSizes["small"], radius: "0%", position: { top: "0%", left: "0%" } },
  { pos: "0", id: "left2", color: colors[4], size: baseSizes["medium"], radius: "0%", position: { top: "0%", left: "37.5%" } },
  { pos: "0", id: "left3", color: colors[5], size: baseSizes["medium"], radius: "0%", position: { top: "50%", left: "0%" } },
  { pos: "1", id: "left4", color: colors[2], size: baseSizes["small"], radius: "0%", position: { top: "50%", left: "62.5%" } }
]

const shapesArray2: ShapeProps[] = [
  { pos: "2", id: "right3", color: colors[3], size: baseSizes["extraSmall"], radius: "0%", position: { top: "75%", left: "75%" } },
  { pos: "1", id: "right2", color: colors[6], size: baseSizes["medium"], radius: "0%", position: { top: "50%", left: "37.5%" } },
  { pos: "0", id: "right1", color: colors[1], size: baseSizes["large"], radius: "0%", position: { top: "0%", left: "0%" } }
]

function App() {
  const [groupe1, setGroupe1] = useState(shapesArray1)
  const [groupe2, setGroupe2] = useState(shapesArray2)
  const [currentDisposition, setCurrentDisposition] = useState<number>(1)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setGroupe1(groupe1.map((shape) => changeAllRadiusRandomly(shape)))
      setGroupe2(groupe2.map((shape) => changeAllRadiusRandomly(shape)))
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [groupe1, groupe2])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentDisposition((prev) => (prev === 1 ? 2 : 1))
    }, 10000)
    setGroupe1(groupe1.map((shape) => changeDisposition({ shape, currentDisposition })))
    setGroupe2(groupe2.map((shape) => changeDisposition({ shape, currentDisposition })))

    return () => clearTimeout(timeOut)
  }, [currentDisposition])

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
