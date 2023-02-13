
import styles from '@/styles/Home.module.css'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps } from 'slate-react'
import { useCallback, useState } from 'react'
import { Leaf } from './utils/leaf'
import { DefaultElement } from './utils/elements/default-element'
import { CodeElement } from './utils/elements/code-element'
import { CustomEditor } from './utils/custom-editor'
import { Toolbar } from './toolbar'
import { SpecialElement } from './utils/elements/special-element'
import { withHistory } from 'slate-history'


export const SlateTextEditor = () => {
  const [editor] = useState(() => withReact(withHistory(createEditor())))  
  const [textValue, setTextValue] = useState<Descendant[]>(initialValue);

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      case 'special':
        return <SpecialElement {...props} />
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
      {/* <pre>
        <code>{JSON.stringify(textValue,null,3)}</code>
      </pre> */}
    </div>
  )

}

const initialValue: Descendant[] = [
  {
     "type": "paragraph",
     "children": [
        {
           "text": "A line of text in a paragraph."
        }
     ]
  },
  {
     "type": "paragraph",
     "children": [
        {
           "text": "you can "
        },
        {
           "text": "bold",
           "bold": true
        },
        {
           "text": ", "
        },
        {
           "text": "underline",
           "underline": true
        },
        {
           "text": " or "
        },
        {
           "text": "italic",
           "italic": true
        }
     ]
  },
  {
     "type": "paragraph",
     "children": [
        {
           "text": "and alsoo, colors! roses are "
        },
        {
           "text": "Red, ",
           "color": 1
        },
        {
           "color": 0,
           "text": "violets are"
        },
        {
           "color": 1,
           "text": " "
        },
        {
           "color": 3,
           "text": "Blue."
        },
        {
           "color": 0,
           "text": " "
        },
        {
           "color": 2,
           "text": "Green"
        },
        {
           "color": 0,
           "text": " leaves sway in the gentle "
        },
        {
           "color": 1,
           "text": "d"
        },
        {
           "color": 3,
           "text": "e"
        },
        {
           "color": 2,
           "text": "w"
        },
        {
           "color": 0,
           "text": "."
        }
     ]
  },
  {
     "type": "code",
     "children": [
        {
           "color": 0,
           "text": "psst! the ",
        },
        {
           "color": 1,
           "text": "color"
        },
        {
           "color": 0,
           "text": " of '"
        },
        {
           "color": 2,
           "text": "change color'"
        },
        {
           "color": 0,
           "text": " button can also "
        },
        {
           "color": 3,
           "text": "change"
        }
     ]
  },
  {
     "type": "paragraph",
     "children": [
        {
           "color": 0,
           "text": "yo",
           "bold": true
        },
        {
           "color": 1,
           "bold": true,
           "text": "u can ",
           "underline": true
        },
        {
           "color": 0,
           "bold": true,
           "underline": true,
           "text": "also m",
           "italic": true
        },
        {
           "color": 2,
           "bold": true,
           "underline": true,
           "italic": true,
           "text": "i"
        },
        {
           "color": 2,
           "text": "x ev",
           "underline": true,
           "italic": true
        },
        {
           "color": 0,
           "text": "er",
           "italic": true
        },
        {
           "color": 0,
           "italic": true,
           "text": "y",
           "bold": true
        },
        {
           "color": 0,
           "italic": true,
           "text": "th"
        },
        {
           "color": 0,
           "text": "i"
        },
        {
           "color": 3,
           "text": "ng up",
           "italic": true,
           "underline": true,
           "bold": true
        }
     ]
  },
  {
     "type": "special",
     "children": [
        {
           "color": 0,
           "text": "noice!"
        }
     ]
  },
  {
    "type": "paragraph",
    "children": [
       {
          "text": "Try redo / undo"
       }
    ]
 },
]