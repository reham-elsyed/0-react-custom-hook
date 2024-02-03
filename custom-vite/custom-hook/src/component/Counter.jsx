import { useState } from "react";

 function useCounter(){
const [counter, setCounter] = useState(0);

const increment = () => setCounter(counter + 1);
const decrement = () => setCounter(counter - 1);
console.log("useCounter");
return{counter, increment, decrement};


}
export default useCounter;