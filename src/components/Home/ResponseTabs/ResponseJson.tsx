import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

import { useHome } from '@/zustand/home';

const ResponseJson = () => {
  const { response } = useHome();
  
  return (
    <CodeMirror
        value={JSON.stringify(response, null, 2)}
        theme={'dark'}
        extensions={[json()]}
        maxHeight='500px'
        readOnly
        basicSetup={{
            foldGutter: true
        }}
      />
  )
}

export default ResponseJson