import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

import { useHome } from '@/zustand/home';


const JsonEditor = () => {
  const {jsonRequest, setJSONRequest} = useHome();
  
  const onChangeHandler = (jsonData: string) => {
    setJSONRequest(jsonData)
  };
  return (
    <CodeMirror
        value={jsonRequest}
        theme={'dark'}
        extensions={[json()]}
        onChange={onChangeHandler}
      />
  )
}

export default JsonEditor