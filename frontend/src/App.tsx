import NavBar from "./components/molecules/NavBar";
import MenuList from "./components/molecules/MenuList";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex">
        <MenuList isOpen={isOpen} />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<div>Mes Courses</div>} />
            <Route
              path="/affectation"
              element={<div>Courses à affecter</div>}
            />
            <Route path="/historique" element={<div>Historique</div>} />
            <Route path="/missions" element={<div>Missions</div>} />
            <Route path="/dispatch" element={<div>Dispatch</div>} />
            <Route path="/statistiques" element={<div>Statistiques</div>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
