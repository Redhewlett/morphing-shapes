import { ShapeProps } from "../components/shape/shape"
import { radiuses, baseSizes, squareSizes } from "../variables/shapesVariables"
import { changeDisposition } from "./positions"
import { changeToSquare, checkIfSquare, changeToRectangle } from "./squares"

export function changeAllRadiusRandomly(shape: ShapeProps): ShapeProps {
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
