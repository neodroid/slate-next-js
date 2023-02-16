import { RenderElementProps } from "slate-react"
import styles from '@/styles/Home.module.css'

export const ButtonElement = (props: RenderElementProps) => {
  // const logText = props.element.logText ? "" : ""
  return (
    <button {...props.attributes} className={styles.button_block} onClick={() => {
      if (props.element.type === "button") {
        console.log(props.element.logText)
      }
      
    }}>
      {props.children}
    </button>
  )
}