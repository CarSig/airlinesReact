import React from "react";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import NumbersIcon from "@mui/icons-material/Numbers";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";

const PersonalInfo = ({ values, handleChange, classes, formErrors }) => {

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom color="primary" align="center">
        Personal Info
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.personName}
        onChange={handleChange("personName")}
        error={!!formErrors.personName}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.personName}
      </Typography>
      <TextField
        label="Surname"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.personLastName}
        onChange={handleChange("personLastName")}
        error={!!formErrors.personLastName}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.personLastName}{" "}
      </Typography>
      <TextField
        label="Address"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.personAddress}
        onChange={handleChange("personAddress")}
        error={!!formErrors.personAddress}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.personAddress}{" "}
      </Typography>
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationCityIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.personCity}
        onChange={handleChange("personCity")}
        error={!!formErrors.personCity}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.personCity}{" "}
      </Typography>
      <TextField
        label="Postcode"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NumbersIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.personPostcode}
        onChange={handleChange("personPostcode")}
        error={!!formErrors.personPostcode}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.personPostcode}{" "}
      </Typography>
      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.personPhone}
        onChange={handleChange("personPhone")}
        error={!!formErrors.personPhone}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.personPhone}{" "}
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.personEmail}
        onChange={handleChange("personEmail")}
        error={!!formErrors.personEmail}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.personEmail}{" "}
      </Typography>
    </div>
  );
};

export default PersonalInfo;
