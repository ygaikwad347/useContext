import { createContext, useState } from "react";

const CountContext = createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const share = { count, handleDecrement, handleIncrement };

  return (
    <div>
      <CountContext.Provider value={share}>{children}</CountContext.Provider>
    </div>
  );
};

export { Provider };

export default CountContext;
