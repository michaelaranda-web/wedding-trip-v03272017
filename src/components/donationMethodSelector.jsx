import React from 'react';
import { ControlLabel, FormGroup, Radio } from 'react-bootstrap';

export class DonationMethodSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMethod: "cash-check"
    };
  }

  onRadioButtonSelect(e) {
    this.setState({selectedMethod: e.currentTarget.value})
  }

  renderSelectedMethod() {
    switch (this.state.selectedMethod) {
      case "paypal":
        return (
          <div>
            <h4>Using Paypal:</h4>
            <p>Visit the <a target="_blank" href="https://www.paypal.com/myaccount/transfer/send">Paypal transfer page </a>
              and send your donation to <strong>michaelaranda0@gmail.com</strong>, using your Paypal account.
              It is free to both create an account and to send money to someone.</p>
          </div>
        );
      case "venmo":
        return (
          <div>
            <h4>Using Venmo:</h4>
            <p>Vist the <a target="_blank" href="https://venmo.com/">Venmo website</a> or use the Venmo mobile app, and send your donation
              to <strong>Michael-Aranda-1</strong>. It is free to both create an account and to send money to someone.</p>
          </div>
        );
      default:
        return (
          <div>
            <h4>Sending a check/cash:</h4>
            <p>To avoid posting our home address on this public website, Martina and I have chosen to only share our
            home address to sponsors in a personal manner. Because you filled out the previous form, we know who to contact
            and will personally get in touch with you through e-mail, Facebook, or text.</p>
          </div>
        );
    }
  }

  renderDonationDetails() {
    if (this.props.currentDonationItem) {
      return (
        <FormGroup className="donation-details">
          <ControlLabel>Donation Details:</ControlLabel>
          <div>
            <span className="donation-detail-label">Sponsoring: </span>{this.props.currentDonationItem.title}
          </div>
          <div>
            <span className="donation-detail-label">Amount: </span>{this.props.currentDonationItem.amount}
          </div>
        </FormGroup>
      );
    }
  }

  render() {
    return (
      <div className="donation-method-selector">
        <h1>Sponsorship Method</h1>

        <p>Thank you again for wanting to help sponsor our wedding trip! Please select one of the
          methods below for more details on how to complete your sponsorship. We sincerely appreciate
          your kindness!
        </p>

        {this.renderDonationDetails()}

        <FormGroup>
          <ControlLabel>Method:</ControlLabel>
          <Radio inline
                 value={"cash-check"}
                 checked={this.state.selectedMethod === "cash-check"}
                 onChange={this.onRadioButtonSelect.bind(this)}>
            Cash/Check
          </Radio>
          {' '}
          <Radio inline
                 value={"paypal"}
                 checked={this.state.selectedMethod === "paypal"}
                 onChange={this.onRadioButtonSelect.bind(this)}>
            Paypal
          </Radio>
          {' '}
          <Radio inline
                 value={"venmo"}
                 checked={this.state.selectedMethod === "venmo"}
                 onChange={this.onRadioButtonSelect.bind(this)}>
            Venmo
          </Radio>
        </FormGroup>

        <div className="selected-method-section">
          {this.renderSelectedMethod()}
        </div>
      </div>
    );
  }
}