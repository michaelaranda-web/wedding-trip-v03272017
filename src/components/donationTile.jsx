import React from 'react';

export class DonationTile extends React.Component {
  onTileClick() {
    this.props.onClickHandler(this.props.donationItem);
  }

  renderTitle() {
    return this.props.donationItem ? this.props.donationItem.title : "Default Title";
  }

  renderAmount() {
    return this.props.donationItem ? this.props.donationItem.amount : "$5";
  }

  render() {
    return (
      <div className="donation-tile">
        <div className="tile-image" onClick={this.onTileClick.bind(this)}></div>
        <div className="title">{this.renderTitle()}</div>
        <div className="donation-amount">{this.renderAmount()}</div>
      </div>
    );
  }
}