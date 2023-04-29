import { ShapeProps } from "../components/shape/shape"
import { baseSizes, squareSizes, rectengleSizes } from "../variables/shapesVariables"

export function checkIfSquare(shape: ShapeProps): boolean {
  const { size } = shape
  if (size.width === size.height) {
    return true
  }
  return false
}

export function changeToSquare(shape: ShapeProps): ShapeProps {
  if (checkIfSquare(shape)) {
    return shape
  }
  const { size } = shape
  const sizeName = Object.keys(baseSizes).find((key) => baseSizes[key].width === size.width)
  const newSize = squareSizes[sizeName!]
  return { ...shape, size: newSize }
}

// change to rectangle using rectengleSizes

export function changeToRectangle(shape: ShapeProps): ShapeProps {
  const { size } = shape
  const sizeName = Object.keys(baseSizes).find((key) => baseSizes[key].width === size.width)
  if (!sizeName) return shape
  const newSize = rectengleSizes[sizeName]
  return { ...shape, size: newSize }
}
