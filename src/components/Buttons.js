import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BackupIcon from "@mui/icons-material/Backup";
import axios from "axios";

const Buttons = ({ step, setStep, prevStep, nextStep, handleSubmit, values, setValues, isNextReady, setIsNextReady, validate, setFormErrors, formErrors }) => {
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isNextReady) {
    }
  }, [formErrors]);
  const submit = (event) => {
    event.preventDefault();
    setFormErrors(validate(values, step));

    setIsNextReady(true);
    if (values.compensationAmount > 0 && values.personEmail !== "") {
      axios({
        url: "api/save",
        method: "POST",
        data: values,
      })
        .then((res) => {
          console.log(res);
          console.log("Data has been sent to the server");
        })
        .then(setStep(6))
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <br></br>
      <br />

      {step === 5 && (
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "orange",
            " &:hover": { backgroundColor: "red" },
          }}
          onClick={submit}
          endIcon={<BackupIcon />}
        >
          Submit
        </Button>
      )}
      <br></br>
      <br />
      <div className="btnComp">
        {" "}
        {step > 1 && step !== 6 && (
          <Button variant="contained" color="primary" onClick={prevStep} startIcon={<NavigateBeforeIcon />}>
            Back
          </Button>
        )}
        {(step === 1 || step === 3 || (step === 4 && values.compensationAmount > 0)) && (
          <Button variant="contained" color="primary" onClick={nextStep} endIcon={<NavigateNextIcon />}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
