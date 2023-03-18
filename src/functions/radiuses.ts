import { ShapeProps } from "../components/shape/shape"
import { radiuses, baseSizes, squareSizes } from "../variables/shapesVariables"
import { changeToSquare, checkIfSquare } from "./squares"

export function changeAllRadiusRandomly(shape: ShapeProps): ShapeProps {
  console.log(checkIfSquare(shape))
  const { radius } = shape
  let newValue: ShapeProps
  let randomIndex = Math.floor(Math.random() * radiuses.length)
  if (radius === radiuses[randomIndex]) {
    randomIndex = Math.floor(Math.random() * radiuses.length)
  }
  newValue = { ...shape, radius: radiuses[randomIndex] }
  return newValue
}

export function changeAllRadiusesToZero(shape: ShapeProps): ShapeProps {
  const { radius } = shape
  let newValue: ShapeProps
  if (radius !== "0%") {
    newValue = { ...shape, radius: "0%" }
    return newValue
  }
  return shape
}

export function changeAllRadiusesToMax(shape: ShapeProps): ShapeProps {
  if (checkIfSquare(shape)) {
    return { ...shape, radius: "50%" }
  } else {
    const square = changeToSquare(shape)
    return { ...square, radius: "50%" }
  }
}
