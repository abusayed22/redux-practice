import { useSelector,useDispatch } from "react-redux";
import {increment,dicrement,newLogin,newLogout} from './action'
function App() {
  const disPatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const islog = useSelector(state => state.logi)
 
  return (
    <div>
      
      <br />
      
        {islog ? (<span><center>
       <h1>counter {counter}</h1>
      </center>
      <center>
        <button onClick={() => disPatch(increment())}>increment by one</button>
        <button onClick={() => disPatch(dicrement())}>dicrement by one</button>
        <br />
        <br />
        <br />
        <button onClick={() => disPatch(newLogout())}>Logout</button>
      </center></span>)
       : (<button onClick={() => disPatch(newLogin())}>Login</button>)}
        
      
    </div>
  );
}

export default App;
