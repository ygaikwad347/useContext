import CountContext from "./context/CountContext";
import { useContext } from "react";

export default function App() {
  const { count, handleIncrement, handleDecrement } = useContext(CountContext);
  return (
    <div>
      Count:{count}
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}
