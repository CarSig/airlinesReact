import React from "react";
import Typography from "@mui/material/Typography";

const ClaimDenied = ({ values }) => {
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom color="primary" align="center">
        Claim denied
      </Typography>
      <Typography variant="body1">{values.isClaimValid()} </Typography>
    </div>
  );
};

export default ClaimDenied;
