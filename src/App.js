import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Mode from "./models/Mode";

const defaultMode = new Mode("calculator", "standard");

function App() {
  const [mode, setMode] = useState(defaultMode);

  return (
    <div className="main_wrapper">
      <header>
        <SideMenu />
        <h1>{mode.type}</h1>
      </header>
    </div>
  );
}

export default App;

///  H14w1GESLIYmEzdsjEDlUVYcYvN3cFbC
