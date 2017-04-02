import React from 'react';
import { FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';
import { DonationMethodSelector } from './donationMethodSelector.jsx';

export class DonationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: "sponsor-information"
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab !== "donate") {
      this.setState({currentStep: "sponsor-information"});
    }
  }

  onSubmitAndContinue() {
    this.setState({currentStep: "sponsor-method-selector"});
  }

  renderFormContent() {
    if (this.state.currentStep === "sponsor-information") {
      return (
        <div>
          <h1>Thank you for wanting to sponsor our trip!</h1>
          <p className="form-top-text">Please fill out the below information so we know who to thank.
            Instructions on how to complete your sponsorship will appear in the next screen,
            once you click 'Submit and Continue'.</p>

          <FieldGroup
              id="formControlsText"
              type="text"
              label="Name*"
              placeholder="Enter name"
          />
          <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
          />

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Comment</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Comment" />
          </FormGroup>

          <p className="warning">Clicking on 'Submit and Continue' will indicate that you wish to reserve this trip fund item.
            The item will be made unavailable for others to donate to.</p>

          <Button bsStyle="primary" onClick={this.onSubmitAndContinue.bind(this)}>
            Submit and Continue
          </Button>
        </div>
      );
    }
    else {
      return <DonationMethodSelector currentDonationItem={this.props.currentDonationItem}/>;
    }
  }

  render() {
    return (
      <form id="donation-form">
        {this.renderFormContent()}
      </form>
    );
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
  );
}