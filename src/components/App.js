import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Drawer from "./drawer/Drawer";
import Heatmap from './heatmap/Heatmap';
import Maps from './maps/Maps';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <Heatmap />
      <Maps/>
    </div>
  );
}

export default App;
