import React from "react";
import Typography from "@mui/material/Typography";
import { lightBlue } from "@mui/material/colors";

const Header = () => {
  return (
    <Typography sx={{ backgroundColor: lightBlue, borderBottom: "solid 1px ", margin: "0px 0px 30px 0px" }} variant="h3" color="primary">
      Airline Form
    </Typography>
  );
};

export default Header;
