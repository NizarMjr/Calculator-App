import './App.css';
import Btns from './components/Btns/Btns';
import Result from './components/Result/Result';
import Thems from './components/Thems/Thems';

function App() {
  return (
    <div className="App">
      <div className='part-one'>
        <h3 className='calc-title'>Calc</h3>
        <Thems />
      </div>
      <Result />
      <Btns />
    </div>
  );
}

export default App;
