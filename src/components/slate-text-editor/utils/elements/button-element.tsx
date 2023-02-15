import { RenderElementProps } from "slate-react"

export const ButtonElement = (props: RenderElementProps) => {
  // const logText = props.element.logText ? "" : ""
  return (
    <button {...props.attributes} onClick={() => {
      console.log("logText");
      
    }}>
      {props.children}
    </button>
  )
}