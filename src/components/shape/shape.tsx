import styled from "styled-components"

const sizes = {
  extraSmall: { width: "37,5%", height: "25%" },
  small: { width: "37,5%", height: "50%" },
  medium: { width: "62,5%", height: "50%" },
  large: { width: "100%", height: "100%" }
}

const borders = {
  none: "0px",
  small: "40px",
  medium: "100px",
  large: "100%"
}

export interface ShapeProps {
  id: string
  color: string
  size: "extraSmall" | "small" | "medium" | "large"
  radius: "none" | "small" | "medium" | "large"
  top: string
  left: string
}

const Square = styled.div`
  background-color: ${(props) => props.color};
  position: absolute;
`

export default function Shape({ color, size, radius, top, left }: ShapeProps) {
  const style: React.CSSProperties = {
    width: sizes[size].width,
    height: sizes[size].height,
    borderRadius: borders[radius],
    top,
    left
  }

  return (
    <>
      <Square color={color} style={style} />
    </>
  )
}
