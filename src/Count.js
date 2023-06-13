import CountContext from "./countContext";
import { useContext } from "react";

function Count() {
  const { count, handleIncrease } = useContext(CountContext);

  return (
    <div>
      Count:{count}
      <button onClick={handleIncrease}>Click</button>
    </div>
  );
}

export default Count;
