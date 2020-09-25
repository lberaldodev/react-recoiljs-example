import React from 'react';
import { useRecoilState, useRecoilValue} from 'recoil'
import { inputValue, charCountState } from './atoms/inputValue'

function App() {

  const [value, setInputValue] = useRecoilState(inputValue);
  
  const charactersCounter = useRecoilValue(charCountState);

  return (
    <div className="App">
      <input type='text' onChange={(e) => setInputValue(e.target.value)} value={value} />
      <div>
        {charactersCounter}
      </div>
    </div>
  );
}

export default App;
