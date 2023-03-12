import styled from "styled-components"

const sizes = {
  extraSmall: { width: "25%", height: "25%" },
  small: { width: "37.5%", height: "50%" },
  medium: { width: "62.5%", height: "50%" },
  large: { width: "100%", height: "100%" }
}

const index = {
  extraSmall: 3,
  small: 2,
  medium: 1,
  large: 0
}

export interface ShapeProps {
  id: string
  color: string
  size: "extraSmall" | "small" | "medium" | "large"
  radius: string
  top: string
  left: string
}

const Square = styled.div`
  background-color: ${(props) => props.color};
  position: absolute;
  transition: top, left, border-radius;
  transition-duration: 750ms;
  transition-timing-function: ease-in-out;
`

export default function Shape({ color, size, radius, top, left }: ShapeProps) {
  const style: React.CSSProperties = {
    width: sizes[size].width,
    height: sizes[size].height,
    borderRadius: radius,
    top,
    left,
    zIndex: index[size]
  }

  return (
    <>
      <Square color={color} style={style} />
    </>
  )
}
