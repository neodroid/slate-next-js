import { Transforms, Editor, Text, Element } from 'slate'
import { CustomEditor, CustomElement, CustomText } from './types'


declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}

export const CustomEditorFunctions = {
  isBoldActive(editor: CustomEditor) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isUnderlineActive(editor: CustomEditor) {
    const marks = Editor.marks(editor);
    return marks ? marks.underline === true : false;
  },

  isItalicActive(editor: CustomEditor) {
    const marks = Editor.marks(editor);
    return marks ? marks.italic === true : false;
  },

  currentActiveColor(editor: CustomEditor) {
    const marks = Editor.marks(editor);
    return marks && marks.color ? marks.color : null;
  },

  isCodeBlockActive(editor: CustomEditor) {
    const [match] = Array.from(Editor.nodes(editor, {
      match: (n: any) => Element.isElement(n) && n.type === 'code',
    }))
    return !!match
  },

  isSpecialActive(editor: CustomEditor) {
    const [match] = Array.from(Editor.nodes(editor, {
      match: (n: any) => Element.isElement(n) && n.type === 'special',
    }))
    return !!match
  },

  toggleBoldMark(editor: CustomEditor) {
    const isActive = CustomEditorFunctions.isBoldActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleUnderlineMark(editor: CustomEditor) {
    const isActive = CustomEditorFunctions.isUnderlineActive(editor)
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleItalicMark(editor: CustomEditor) {
    const isActive = CustomEditorFunctions.isItalicActive(editor)
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleChangeColorMark(editor: CustomEditor, color?: number | null) {
    Transforms.setNodes(
      editor,
      { color: color },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleCodeBlock(editor: CustomEditor) {
    const isActive = CustomEditorFunctions.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'code' },
      { match: n => Editor.isBlock(editor, n as any), mode: "all" }
    );
  },

  toggleSpecialBlock(editor: CustomEditor) {
    const isActive = CustomEditorFunctions.isSpecialActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'special' },
      { match: n => Editor.isBlock(editor, n as any), mode: "all" }
    );
  },
}