import React from "react";
import { withStyles } from "@material-ui/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";
import { ValidatorForm } from "react-material-ui-form-validator";
import AddAddress from "../AddAddress/addAddress";
import PrimarySearchAppBar from "../navbar/Navbar";
import '../../assets/placeorder.css';
// import ConfirmOrder from '../ConfirmOrder/confirmOrder';

const styles = {
  root: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginRight: 8
  },
  title: {
    flexGrow: 1
  },
  appBarBottom: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  paper: {
    paddingBottom: 90
  },
  text: {
    padding: 2
  },
  backButton: {
    marginRight: 8
  },
  instructions: {
    marginTop: 8,
    marginBottom: 8
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      data: {
        email1: "",
        email2: "",
        email3: ""
      },
      disabled: false,
      captchaValid: false,
      submitted: false
    };
  }
  getSteps = () => {
    return [
      "Items",
      "Select Address",
      "Confirm"
    ];
  };

  onChange = event => {
    const { data } = this.state;
    data[event.target.name] = event.target.value;
    this.setState({ data });
  };

  submit = () => {
    this.form.submit();
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  };

  prevStep = () => {
    let { step } = this.state;
    if (step > 1) {
      step--;
    }
    this.setState({ step });
  };

  nextStep = () => {
    this.form.isFormValid(false).then(isValid => {
      if (isValid) {
        let { step } = this.state;
        if (step < 3) {
          step++;
        }
        this.setState({ step });
      }
    });
  };

  validatorListener = result => {
    this.setState({ disabled: !result });
  };

  renderStep = () => {
    const { step } = this.state;
    let content = null;
    switch (step) {
      case 1:
        content = (
          <div>
          <AddAddress/>
          </div>
        );
        break;
      case 2:
        content = (
          <AddAddress/>
        );
        break;
      case 3:
        // content = (
        //   <div>
        //     {/* <ConfirmOrder/> */}
        //   </div>
        // );
        break;
      default:
        content = <div>Error</div>;
        break;
    }
    return content;
  };
  render() {
    const { classes } = this.props;
    const { step, disabled, submitted, captchaValid } = this.state;
    const steps = this.getSteps();
    return (
      <div className={classes.root}>
        <PrimarySearchAppBar/>
        <Paper square className={classes.paper}>
          <div className={classes.root}>
            <Stepper activeStep={step - 1} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <ValidatorForm
              ref={r => {
                this.form = r;
              }}
              onSubmit={this.handleSubmit}
              instantValidate
            >
              <Container>{this.renderStep()}</Container>
                <Toolbar class='buttons'>
                  <Button
                    onClick={this.prevStep}
                    style={{ alignItems: "center", justifyContent: "center"}}
                    disabled={step === 1}
                  >
                    Back
                  </Button>
                  <Button sx={{alignItems: "center", justifyContent: "center"}}
                    color="primary"
                    variant="contained"
                    onClick={step < 3 ? this.nextStep : this.submit}
                    disabled={step < 3 ? disabled || submitted : !captchaValid}
                  >
                    {(submitted && "Your form is submitted!") ||
                      (step < 3 ? "Next" : "Place Order")}
                  </Button>
                </Toolbar>
            </ValidatorForm>
          </div>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(App);
