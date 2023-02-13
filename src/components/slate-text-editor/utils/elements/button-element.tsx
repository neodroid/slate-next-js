import { RenderElementProps } from "slate-react"

export const ButtonElement = (props: RenderElementProps) => {
  return (
    <button {...props.attributes}>
      {props.children}
    </button>
  )
}