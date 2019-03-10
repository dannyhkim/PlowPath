import React from "react";
import plowimage from "./plowimage.png";
import { Typography } from "@material-ui/core";

export const Intro = () => {
  return (
    <div>
      <Typography>PlowPath</Typography>
      <img src={plowimage}></img>
      <Typography>Make sure there's a safe route for you.</Typography>
    </div>
    );
};

