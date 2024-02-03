import './App.css'
import useCounter from "./component/Counter.jsx"
function App() {

  const {counter, increment, decrement} = useCounter(0);

  return(
      <div>
<p> count is {counter}</p>
<button onClick = {increment}> increment</button>
<button onClick = {decrement}> decrement</button>
</div>)
}

export default App
