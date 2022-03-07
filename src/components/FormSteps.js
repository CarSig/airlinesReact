import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import FlightInfo from "./FormSteps/FlightInfo";
import ProblemChoice from "./FormSteps/ProblemChoice";
import ProblemDetails from "./FormSteps/ProblemDetails";
import Payout from "./FormSteps/Payout";
import PersonalInfo from "./FormSteps/PersonalInfo";
import Buttons from "./Buttons";
import ClaimDenied from "./FormSteps/ClaimDenied";
import ThankYou from "./FormSteps/ThankYou";

import { valuesData } from "./airData";

const FormSteps = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isNextReady, setIsNextReady] = useState(false);

  const validate = (values, step) => {
    const errors = {};

    const regex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    switch (step) {
      case 1:
        if (!values.flightNumber) {
          errors.flightNumber = "Flight number is required!";
        }
        if (!values.departureAirport) {
          errors.departureAirport = "Departure Airport is required!";
        }
        if (!values.departureTime) {
          errors.departureTime = "Departure time and date is required!";
        }
        if (!values.arrivalAirport) {
          errors.arrivalAirport = "Arrival airport is required!";
        }

        if (!values.arrivalTime) {
          errors.arrivalTime = "Arrival time and date is required!";
        }
        break;
      case 3:
        switch (values.problemChoice) {
          case "cancellation":
            if (!values.cancelledWeeksBefore) {
              errors.cancelledWeeksBefore = "Please select one option";
            }

            if (values.cancelledWeeksBefore && !values.replacementFlightOffered && values.cancelledWeeksBefore !== "3") {
              errors.replacementFlightOffered = "Please select one option";
            }
            if (values.replacementFlightOffered !== "false" && !values.realDepartureTime) {
              errors.realDepartureTime = "New departure time is required";
            }
            if (values.replacementFlightOffered && !values.realArrivalTime && values.replacementFlightOffered == true) {
              errors.realArrivalTime = "New arrival time is required";
            }

            break;
          case "delay":
            if (!values.realArrivalTime) {
              errors.realArrivalTime = "New arrival time is required";
            }

            break;
          case "denied":
            if (!values.checkedInOnTime) {
              errors.checkedinOnTime = "Please select one option";
            }
            break;
          default:
            break;
        }
        break;
      case 4:
        if (!values.airlineContacted) {
          errors.airlineContacted = "Please select one option";
          if (values.airlineContacted && !values.airlinePayoutGiven && values.airlineContacted !== "true") {
            errors.airlinePayoutGiven = "Please select one option";
            if (values.airlinePayoutGiven && !values.airlinePayoutAmount && values.airlinePayoutGiven !== "true") {
              errors.airlinePayoutAmount = "Please enter the amount";
            }
          }
          break;
        }
        break;
      case 5:
        if (!values.personName) {
          errors.personName = "Input is required!";
        }
        if (!values.personLastName) {
          errors.personLastName = "Input is required!";
        }
        if (!values.personAddress) {
          errors.personAddress = "Input is required!";
        }
        if (!values.personCity) {
          errors.personCity = "Input is required!";
        }
        if (!values.personPostcode) {
          errors.personPostcode = "Input is required!";
        }
        if (!values.personPhone) {
          errors.personPhone = "Input is required!";
        }
        if (!values.personEmail) {
          errors.personEmail = "Input is required!";
          if (!regex.test(values.personEmail)) {
            errors.personEmail = "This is not a valid email format!";
          } else if (!regex.test(values.email)) {
            errors.personEmail = "This is not valid email format";
          }
        }
        break;

      default:
        break;
    }

    return errors;
  };

  const [values, setValues] = useState(valuesData);

  //

  let [step, setStep] = useState(1);
  let [previousStep, setPreviousStep] = useState(1);

  /**
   * after validating errors, if no errors go to next step
   */
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isNextReady) {
      values.isClaimValid() !== "" ? setStep(6) : setStep(step + 1);
    }
  }, [formErrors]);
  //

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const nextStep = () => {
    setFormErrors(validate(values, step));

    setIsNextReady(true);
  };

  const prevStep = () => {
    setStep(previousStep);
    setPreviousStep(step - 1);
  };

  const classes = {
    input: { marginBottom: "20px" },
    choice: { marginBottom: "12px" },
    flightInfo: {
      marginBottom: "25px",
      padding: "10px",
      border: "2px solid",
      borderColor: "#3f51b5",
    },
    errorMsg: { position: "relative", top: "-20px", fontSize: "small" },
  };

  return (
    <div className="container">
      <Header></Header>

      <form noValidate autoComplete="off" data-netlify="true" method="POST">
        {step === 1 && <FlightInfo values={values} setValues={setValues} handleChange={handleChange} formErrors={formErrors} classes={classes} />}
        {step === 2 && (
          <ProblemChoice values={values} setValues={setValues} handleChange={handleChange} nextStep={nextStep} formErrors={formErrors} classes={classes} />
        )}
        {step === 3 && (
          <ProblemDetails setValues={setValues} handleChange={handleChange} nextStep={nextStep} values={values} formErrors={formErrors} classes={classes} />
        )}
        {step === 4 && (
          <Payout
            values={values}
            setValues={setValues}
            handleChange={handleChange}
            formErrors={formErrors}
            classes={classes}
            step={step}
            setStep={setStep}
            prevStep={prevStep}
          />
        )}

        {step === 5 && <PersonalInfo values={values} setValues={setValues} handleChange={handleChange} formErrors={formErrors} classes={classes} />}
        {step === 6 && <ClaimDenied values={values} />}
        {step === 7 && <ThankYou></ThankYou>}
        <Buttons
          step={step}
          setStep={setStep}
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
          setValues={setValues}
          classes={classes}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          validate={validate}
          isNextReady={isNextReady}
          setIsNextReady={setIsNextReady}
        />

        <br></br>
      </form>
    </div>
  );
};

export default FormSteps;
