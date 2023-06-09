import { useEffect } from "react"
import styled from "styled-components"
import { baseSizes } from "../../variables/shapesVariables"
export interface ShapeProps {
  pos: string
  id: string
  color: string
  size: { width: string; height: string }
  radius: string
  position: { top: string; left: string }
}

const Square = styled.div`
  background-color: ${(props) => props.color};
  position: absolute;
  transition: all;
  transition-duration: 750ms;
  transition-timing-function: ease-in-out;
`

export default function Shape({ pos, color, size, radius, position }: ShapeProps) {
  const { top, left } = position
  const style: React.CSSProperties = {
    width: size.width,
    height: size.height,
    borderRadius: radius,
    top,
    left,
    zIndex: Number(pos)
  }

  return (
    <>
      <Square color={color} style={style} />
    </>
  )
}
