import { RenderElementProps } from "slate-react"
import styles from '@/styles/Home.module.css'

export const SpecialElement = (props: RenderElementProps) => {
  return (
    <div {...props.attributes} className={styles.special_element}>
      <p>{props.children}</p>
    </div>
  )
}