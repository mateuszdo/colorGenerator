import { useState } from 'react'
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [color, setColor] = useState('#000000');
  const [colors, setColors] = useState([])
 

  const generateColor = () => {
    
    const newColors = new Values(color).all(10);
    setColors(newColors);
  }
  
  //console.log(colors);
  
  return (
    <main className='container'>
      <Form 
          className='header'
          color={color} 
          setColor={setColor} 
          generateColor={generateColor}
          colors={colors}
          setColors={setColors}
          toast={toast} />
      <ColorList colors={colors} toast={toast}/>
      <ToastContainer 
        position='top-center'
        autoClose={1500}
        hideProgressBar={true} 
      />
    </main>
  );
};
export default App;
