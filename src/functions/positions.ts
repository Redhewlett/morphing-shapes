import { ShapeProps } from "../components/shape/shape"

interface dispositionObject {
  [key: number]: {
    [key: string]: { top: string; left: string }
  }
}

export const disposition: dispositionObject = {
  1: {
    left1: { top: "0%", left: "0%" },
    left2: { top: "0%", left: "37.5%" },
    left3: { top: "50%", left: "0%" },
    left4: { top: "50%", left: "62.5%" },
    right1: { top: "0%", left: "0%" },
    right2: { top: "50%", left: "37.5%" },
    right3: { top: "75%", left: "75%" }
  },
  2: {
    left1: { top: "0%", left: "0%" },
    left2: { top: "0%", left: "20%" },
    left3: { top: "20%", left: "50%" },
    left4: { top: "20%", left: "80%" },
    right1: { top: "0%", left: "0%" },
    right2: { top: "10%", left: "50%" },
    right3: { top: "35%", left: "75%" }
  }
}

export function changeDisposition({ shape, currentDisposition }: { shape: ShapeProps; currentDisposition: number }): ShapeProps {
  const { id } = shape
  const newDisposition = currentDisposition === 1 ? 2 : 1
  const newPositions = disposition[newDisposition][id]
  const newShape = { ...shape, position: newPositions }
  return newShape
}
