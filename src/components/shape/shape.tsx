import styled from "styled-components"

const sizes = {
  small: { width: "25%", height: "25%" },
  medium: { width: "30%", height: "50%" },
  long: { width: "15%", height: "80%" },
  large: { width: "40%", height: "100%" }
}

const borders = {
  none: "0px",
  small: "40px",
  medium: "100px",
  large: "120px"
}

interface ShapeProps {
  color: string
  size: "small" | "medium" | "long" | "large"
  radius: "none" | "small" | "medium" | "large"
}

const Div = styled.div`
  background-color: ${(props) => props.color};
`

export default function Shape({ color, size, radius }: ShapeProps) {
  const style = {
    width: sizes[size].width,
    height: sizes[size].height,
    borderRadius: borders[radius]
  }

  return (
    <>
      <Div color={color} style={style} />
    </>
  )
}
