export const radiuses = ["0%", "2rem", "0 0 0 10rem", "4rem 0 0 0", "0 10rem  0 0", "0  10rem 10rem 0"]

export const colors: { [key: number]: string } = {
  1: "#264653",
  2: "#2A9D8F",
  3: "#E9C46A",
  4: "#F4A261",
  5: "#E76F51",
  6: "#EC8C74",
  7: "#f5c4b7"
}

export type ShapeSizes = {
  [key: string]: {
    width: string
    height: string
  }
}

export const baseSizes: ShapeSizes = {
  extraSmall: { width: "25%", height: "25%" },
  small: { width: "37.5%", height: "50%" },
  medium: { width: "62.5%", height: "50%" },
  large: { width: "100%", height: "100%" }
}

export const squareSizes: ShapeSizes = {
  extraSmall: { width: "25%", height: "25%" },
  small: { width: "37.5%", height: "37.5%" },
  medium: { width: "62.5%", height: "62.5%" },
  large: { width: "100%", height: "100%" }
}

export const rectengleSizes: ShapeSizes = {
  extraSmall: { width: "20%", height: "50%" },
  small: { width: "25%", height: "60%" },
  medium: { width: "30%", height: "60%" },
  large: { width: "50%", height: "100%" }
}
