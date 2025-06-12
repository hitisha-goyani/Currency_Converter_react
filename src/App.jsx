
import './App.css'
import Converter from "./Component/Converter"

function App() {

  return (
    <div className='border my-5 border-amber-400 flex justify-center p-4  '>
       <div className="  ">
        <h1 className='text-5xl mb-5 font-bold text-center' >Currency Converter</h1>
      <Converter/>
    </div>
    </div>
     
  )
}

export default App
