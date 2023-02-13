import { RenderElementProps } from "slate-react"
import styles from '@/styles/Home.module.css'

export const CodeElement = (props: RenderElementProps) => {
  return (
    <pre {...props.attributes} className={styles.testing}>
      <code>{props.children}</code>
    </pre>
  )
}