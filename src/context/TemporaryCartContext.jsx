import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for your context
// type TemporaryCartContextType = {
//   temporaryCart: []; // Replace string[] with your actual data type
//   setTemporaryCart: React.Dispatch<React.SetStateAction<any>>;
// };

// Create the context with an initial value
const TemporaryCartContext = createContext(undefined);

// Create a custom hook to use the context
const useTemporaryCartContext = () => {
  const context = useContext(TemporaryCartContext);
  if (!context) {
    throw new Error(
      "useTemporaryCartContext must be used within a TemporaryCartContextProvider"
    );
  }
  return context;
};

// Create a provider component
const TemporaryCartContextProvider = ({
  children,
}) => {
  const [temporaryCart, setTemporaryCart] = useState([]); // Replace string[] with your initial data type

  return (
    <TemporaryCartContext.Provider value={{ temporaryCart, setTemporaryCart }}>
      {children}
    </TemporaryCartContext.Provider>
  );
};

export { TemporaryCartContextProvider, useTemporaryCartContext };
