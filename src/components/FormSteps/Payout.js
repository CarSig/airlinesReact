import React from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EuroIcon from "@mui/icons-material/Euro";
import InputAdornment from "@mui/material/InputAdornment";
import CalculateIcon from "@mui/icons-material/Calculate";
import Fade from "@mui/material/Fade";

const Payout = ({ values, setValues, handleChange, classes, formErrors, step, setStep, prevStep }) => {
  const calculate = () => {
    if (values.getCompensationBasic() === 0) {
      setStep(6);
      return;
    } else {
      setValues({ ...values, compensationAmount: values.getCompensationBasic() });
    }
  };

 

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom color="primary" align="center">
        Payout
      </Typography>

      <FormControl>
        <FormLabel>Have you already contacted the airline?</FormLabel>
        <RadioGroup value={values.airlineContacted} onChange={handleChange("airlineContacted")}>
          <FormControlLabel control={<Radio />} value={true} label="Yes"></FormControlLabel>
          <FormControlLabel control={<Radio />} value={false} label="No"></FormControlLabel>
        </RadioGroup>
        <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
          {formErrors.airlineContacted}{" "}
        </Typography>
      </FormControl>

      {values.airlineContacted === "true" && (
        <FormControl>
          <FormLabel>Have you already received any compensation?</FormLabel>
          <RadioGroup sx={classes.input} value={values.airlinePayoutGiven} onChange={handleChange("airlinePayoutGiven")}>
            <FormControlLabel control={<Radio />} value={true} label="Yes"></FormControlLabel>
            <FormControlLabel control={<Radio />} value={false} label="No"></FormControlLabel>
          </RadioGroup>
        </FormControl>
      )}

      {values.airlineContacted === "true" && values.airlinePayoutGiven === "true" && (
        <FormControl>
          <FormLabel variant="body1">How much money did you receive(per person)?</FormLabel>

          <TextField
            label="Enter amount per person"
            type="number"
            variant="outlined"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EuroIcon />
                </InputAdornment>
              ),
            }}
            sx={classes.input}
            value={values.airlinePayoutAmount}
            onChange={handleChange("airlinePayoutAmount")}
          ></TextField>
        </FormControl>
      )}

      {((values.airlineContacted === "true" && values.airlinePayoutGiven === "true" && values.airlinePayoutAmount !== "") ||
        (values.airlineContacted === "true" && values.airlinePayoutGiven === "false") ||
        values.airlineContacted === "false") && (
        <Fade in timeout={500}>
          <Button sx={{ margin: "40px 0px" }} variant="contained" color="secondary" onClick={calculate} endIcon={<CalculateIcon />} fullWidth>
            Calculate
          </Button>
        </Fade>
      )}

      {values.compensationAmount > 0 && (
        <div>
          <Typography variant="body1">You have a possible right to compensation in the total amount of:</Typography>
          <Typography variant="body1" color="primary">
            {values.getCompensationBasic()}€ per person{" "}
          </Typography>
          <Typography variant="body1">
            Please indicate the number of people for whom you are applying.Please note that any amount you received from airline will be subtracted from total
            amount
          </Typography>

          <TextField
            sx={{ margin: "40px 0px" }}
            label="Number of people travelling"
            type="number"
            variant="outlined"
            required
            value={values.howManyTravellers}
            onChange={handleChange("howManyTravellers")}
          ></TextField>

          {values.airlineContacted === "true" && values.airlinePayoutGiven === "true" && values.airlinePayoutAmount !== "" && (
            <div>
              <Typography variant="body1">Maximum amount : {values.getCompensationBasic() * values.howManyTravellers} €</Typography>

              <Typography variant="body1">Already paid by airline: -{values.airlinePayoutAmount * values.howManyTravellers} €</Typography>
              <Typography sx={{ margin: "20px 0px 0px" }} variant="body1">
                Total amount
              </Typography>

              <Typography variant="h4" color="primary">
                {values.getCompensationBasic() * values.howManyTravellers - values.airlinePayoutAmount * values.howManyTravellers} €
              </Typography>
            </div>
          )}

          {(values.airlineContacted === "false" || (values.airlineContacted === "true" && values.airlinePayoutGiven === "false")) && (
            <div>
              <Typography sx={{ margin: "20px 0px 0px" }} variant="body1">
                Total amount
              </Typography>

              <Typography variant="h4" color="primary">
                {values.compensationAmount * values.howManyTravellers} €
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Payout;
