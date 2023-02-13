import { Transforms, Editor, Text, BaseEditor, Element } from 'slate'
import { ReactEditor } from 'slate-react'

type ParagraphElement = {
  type: 'paragraph';
  children: CustomText[];
};

type CodeElement = {
  type: 'code';
  children: CustomText[];
};

type ButtonElement = {
  type: 'button';
  children: CustomText[];
};

type CustomElement = ParagraphElement | CodeElement
type CustomEditor = BaseEditor & ReactEditor;

type CustomText = {
  text: string;
  bold?: true | null;
  italic?: true | null;
  underline?: true | null;
  color?: number | null;
};
declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Text: CustomText
  }
}


export const CustomEditor = {
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

  toggleBoldMark(editor: CustomEditor) {
    const isActive = CustomEditor.isBoldActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleUnderlineMark(editor: CustomEditor) {
    const isActive = CustomEditor.isUnderlineActive(editor)
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleItalicMark(editor: CustomEditor) {
    const isActive = CustomEditor.isItalicActive(editor)
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
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'code' },
      { match: n => Editor.isBlock(editor, n as any), mode: "all" }
    );
  },
}