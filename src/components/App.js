import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Drawer from "./drawer/Drawer";

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Header open={open} onOpen={setOpen} />
      <Drawer open={open} onOpen={setOpen} />
    </div>
  );
}

export default App;
