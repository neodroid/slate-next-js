import { Descendant } from "slate";

export const initialValue: Descendant[] = [
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
       ],
       "color": 0
    },
    {
      "type": "paragraph",
      "children": [
         {
            "text": "Try redo / undo"
         }
      ]
   },
   {
      "type": "button",
      "children": [
         {
            "text": "click this",
         }
      ],
      "logText": "hello!!!"
   },
   {
      "type": "paragraph",
      "children": [
         {
            "text": "(check console logs)",
            "bold": true
         }
      ]
   },
   {
      "type": "button",
      "logText": "another hello!",
      "children": [
         {
            "text": "click meee!!!!"
         }
      ]
   }
  ]