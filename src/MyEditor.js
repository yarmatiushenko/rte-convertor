import React, { useEffect, useState, useRef } from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyEditor = () => {
  const [editor, setEditor] = useState(() => EditorState.createEmpty(),);
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value.replaceAll('\\"', '"'));

  const convertToText = () => {
    const DBEditorState = convertFromRaw(JSON.parse(value));
    setEditor(EditorState.createWithContent(DBEditorState));
  }

  return (
    <div style={styles.root}>

      <textarea
      style={styles.textarea}
        value={value}
        placeholder="Enter some text..."

        onChange={onChange}>
      </textarea>

      <div style={styles.editor}>
        <Editor
          editorState={editor}
          readOnly
        />
      </div>

      <button style={styles.button} onClick={convertToText}>convert</button>

    </div>
  );
}

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
  },
  textarea: {
    width: '100%',
    minHeight: 80,
    padding: 5,
    fontSize: '12px',
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
    fontSize: '12px',
  },
  button: {
    margin: '15px auto',
    textAlign: 'center',
  },
};

export default MyEditor;