import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from "../navbar/Navbar";
import AddAddress from "../AddAddress/addAddress";
import Toolbar from "@material-ui/core/Toolbar";
import { Container } from '@mui/system';
import Address from '../Address/Address';

const steps = ['Items', 'Select Address', 'Confirm Order'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log(activeStep);
    if(activeStep === 1){
      window.location.replace('productDetails');
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <PrimarySearchAppBar />
      <br></br>
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Container>
      {activeStep === 1 ? <AddAddress /> : ''}
      {activeStep === 2 ? <Address /> : ''}
      <React.Fragment>
        <Toolbar className='buttons'>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            Back
          </Button>
          <Button onClick={handleNext} sx={{ alignItems: "center", justifyContent: "center" }}>
            {activeStep === steps.length ? 'Place Order' : 'Next'}
          </Button>
        </Toolbar>
      </React.Fragment>
    </Box>
  );
}