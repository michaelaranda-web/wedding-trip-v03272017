import React from 'react';
import $ from 'jquery'
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
    $.ajax({
      type: "POST",
      url: "/api/submit_donation",
      // The key needs to match your method's input parameter (case-sensitive).
      data: this._getSubmitDonationStr(),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data){},
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

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
              name="name-field"
              placeholder="Enter name"
          />
          <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              name="email-field"
              placeholder="Enter email"
          />

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Comment</ControlLabel>
            <FormControl className="donation-comment" componentClass="textarea" placeholder="Comment" />
          </FormGroup>

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

  _getSubmitDonationStr() {
    let submitDonateStr = {};

    submitDonateStr.name = $('input[name="name-field"]')[0].value;
    submitDonateStr.email = $('input[name="email-field"]')[0].value;
    submitDonateStr.comment = $('.donation-comment')[0].value;

    submitDonateStr.donationItem = this.props.currentDonationItem.title;
    submitDonateStr.donationAmount = this.props.currentDonationItem.amount;

    return JSON.stringify(submitDonateStr);
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