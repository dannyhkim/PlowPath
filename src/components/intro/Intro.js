import React from "react";
import plowimage from "./plowimage.png";
import { Typography } from "@material-ui/core";
import { white } from "ansi-colors";

export const Intro = () => {
  return (
    <div style={{textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      fontFamily: "Avenir"}}>
      <Typography class="title"
      style={{
        display: "inline-flex",
        fontSize: "100px"
      }}>
        PlowPath
      </Typography>
      <img style={{width: "600px", display: "inline-flex"}}
      src={plowimage}></img>
      <Typography class="description"
      style={{
        display: "inline-flex",
        fontSize: "30px"
      }}>
      Make sure there's a safe route for you.
      </Typography>
    </div>
    );
};

