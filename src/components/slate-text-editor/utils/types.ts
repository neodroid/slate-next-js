import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type ParagraphElement = {
    type: 'paragraph';
    children: CustomText[];
};

export type CodeElement = {
    type: 'code';
    children: CustomText[];
};

export type SpecialElement = {
    type: 'special';
    color: number | 0;
    children: CustomText[];
};

export type ButtonElement = {
    type: 'button';
    logText: string;
    children: CustomText[];
};

export type CustomElement = ButtonElement | CodeElement | SpecialElement  | ParagraphElement
export type CustomEditor = BaseEditor & ReactEditor;

export type CustomText = {
    text: string;
    bold?: true | null;
    italic?: true | null;
    underline?: true | null;
    color?: number | null;
};