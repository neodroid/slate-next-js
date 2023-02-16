import { useSlate } from "slate-react";
import styles from "../../styles/Home.module.css"
import { CustomEditorFunctions } from "./utils/custom-editor"
import { FaUnderline, FaBold, FaItalic } from "react-icons/fa";
import { BiFontColor } from "react-icons/bi";
import { useEffect, useState } from "react";

const colorMap = [
  { key: 0, color: "black", className: styles.black_button },
  { key: 1, color: "red", className: styles.red_button },
  { key: 2, color: "green", className: styles.green_button },
  { key: 3, color: "blue", className: styles.blue_button }
];


export const Toolbar = () => {
  const [buttonValue, setButtonValue] = useState("");

  const editor = useSlate();
  const isBoldActive = CustomEditorFunctions.isBoldActive(editor)
  const isUnderlineActive = CustomEditorFunctions.isUnderlineActive(editor)
  const isItalicActive = CustomEditorFunctions.isItalicActive(editor)
  const currentActiveColor = CustomEditorFunctions.currentActiveColor(editor)
  const isCodeBlockActive = CustomEditorFunctions.isCodeBlockActive(editor)
  const isSpecialActive = CustomEditorFunctions.isSpecialActive(editor)
  const isButtonBlockActive = CustomEditorFunctions.isButtonBlockActive(editor)
  const currentButtonLogText = CustomEditorFunctions.currentButtonBlockLog(editor)

  const marks = [
    { name: "bold", active: isBoldActive, toggle: CustomEditorFunctions.toggleBoldMark },
    { name: "underline", active: isUnderlineActive, toggle: CustomEditorFunctions.toggleUnderlineMark },
    { name: "italic", active: isItalicActive, toggle: CustomEditorFunctions.toggleItalicMark },
  ];

  useEffect(() => {
    setButtonValue(currentButtonLogText);
  }, [currentButtonLogText]);


  return (
    <div className={styles.toolbar}>
      <div>
      <div className={styles.flex}>
        {marks.map(mark => (
          <button
            key={mark.name}
            className={mark.active ? styles.active_toolbar_button : styles.default_toolbar_button}
            onMouseDown={event => {
              event.preventDefault();
              mark.toggle(editor);
            }}
          >
            {mark.name === "bold" && <FaBold />}
            {mark.name === "underline" && <FaUnderline />}
            {mark.name === "italic" && <FaItalic />}
          </button>
        ))}
        <div className={styles.dropdown}>
          <BiFontColor color={colorMap[currentActiveColor ? currentActiveColor : 0].color} />
          <div className={styles.dropdown_content}>
            {colorMap.map(color => (
              <button
                key={color.key}
                className={color.className}
                onMouseDown={event => {
                  event.preventDefault();
                  CustomEditorFunctions.toggleChangeColorMark(editor, color.key);
                }}
              >
                {/* <FaUnderline /> */}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button
          className={isCodeBlockActive ? styles.active_toolbar_button : styles.default_toolbar_button}
          onMouseDown={event => {
            event.preventDefault()
            CustomEditorFunctions.toggleCodeBlock(editor)
          }}
        >
          Code Block
        </button>
        <button
          className={isSpecialActive ? styles.active_toolbar_button : styles.default_toolbar_button}
          onMouseDown={event => {
            event.preventDefault()
            CustomEditorFunctions.toggleSpecialBlock(editor)
          }}
        >
          Special Block
        </button>
        <button
          className={isButtonBlockActive ? styles.active_toolbar_button : styles.default_toolbar_button}
          onMouseDown={event => {
            event.preventDefault()
            CustomEditorFunctions.toggleButtonBlock(editor)
          }}
        >
          Button Block
        </button>
      </div>
      </div>
      <div>
        <div className={isButtonBlockActive ? styles.buttonInput : styles.hide}>
          <p>console log text:</p>
          <input 
          value={buttonValue}
          onChange={event => {
          setButtonValue(event.target.value);
         
        }}/>
        <button onClick={ () => {
          CustomEditorFunctions.changeButtonBlockText(editor, buttonValue)
        }
        }>change</button>
        </div>
      </div>
        
    </div>
  )
}