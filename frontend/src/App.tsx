import "./App.css";
import NavBar from "./components/molecules/NavBar";
import MenuList from "./components/molecules/MenuList";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuList isOpen={isOpen} />
    </>
  );
}

export default App;
