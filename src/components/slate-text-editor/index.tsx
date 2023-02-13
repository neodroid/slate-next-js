
import styles from '@/styles/Home.module.css'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps } from 'slate-react'
import { useCallback, useState } from 'react'
import { Leaf } from './utils/leaf'
import { DefaultElement } from './utils/elements/default-element'
import { CodeElement } from './utils/elements/code-element'
import { CustomEditor } from './utils/custom-editor'
import { Toolbar } from './toolbar'


export const SlateTextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [textValue, setTextValue] = useState<Descendant[]>(initialValue);

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
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
              case '/': {
                event.preventDefault()
                CustomEditor.toggleCodeBlock(editor)
                break
              }

              case 'b': {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                break
              }
            }
          }}
        />
      </Slate>
    </div>
  )

}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{
      text: 'A line of text in a paragraph.'
    }],
  },
]