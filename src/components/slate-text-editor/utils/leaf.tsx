import { RenderLeafProps } from "slate-react"
import styles from '@/styles/Home.module.css'

const colorMap = [styles.leafcolorBlack, styles.leafcolorRed, styles.leafcolorGreen, styles.leafcolorBlue]


export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {

  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  if (leaf.color) {
    children = <span className={colorMap[leaf.color]}>{children}</span>
  }

  return <span {...attributes}>{children}</span>
}