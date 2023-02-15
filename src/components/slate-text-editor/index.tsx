
import styles from '@/styles/Home.module.css'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps } from 'slate-react'
import { useCallback, useState } from 'react'
import { Leaf } from './utils/leaf'
import { DefaultElement } from './utils/elements/default-element'
import { CodeElement } from './utils/elements/code-element'
import { CustomEditorFunctions } from './utils/custom-editor'
import { Toolbar } from './toolbar'
import { SpecialElement } from './utils/elements/special-element'
import { withHistory } from 'slate-history'
import { initialValue } from './utils/initialValue'
import { ButtonElement } from './utils/elements/button-element'


export const SlateTextEditor = () => {
  const [editor] = useState(() => withReact(withHistory(createEditor())))  
  const [textValue, setTextValue] = useState<Descendant[]>(initialValue);

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      case 'special':
        return <SpecialElement {...props} />
      case 'button':
        return <ButtonElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />
  }, [])

  return (
    <div>
      <Slate editor={editor} value={textValue}
        onChange={value => {
          setTextValue(value);
        }}
      >
        <Toolbar />
        <Editable
          className={styles.textEditor}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={event => {
            if (!event.ctrlKey) {
              return
            }

            switch (event.key) {
              case '`': {
                event.preventDefault()
                CustomEditorFunctions.toggleCodeBlock(editor)
                break
              }

              case 'b': {
                event.preventDefault()
                CustomEditorFunctions.toggleBoldMark(editor)
                break
              }

              case 'i': {
                event.preventDefault()
                CustomEditorFunctions.toggleItalicMark(editor)
                break
              }

              case 'u': {
                event.preventDefault()
                CustomEditorFunctions.toggleUnderlineMark(editor)
                break
              }
            }
          }}
        />
      </Slate>
    </div>
  )

}

