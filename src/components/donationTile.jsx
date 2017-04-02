import React from 'react';

export class DonationTile extends React.Component {
  onTileClick() {
    this.props.onClickHandler(this.props.donationItem);
  }

  renderImage() {
    return this.props.imageSrc ? this.props.imageSrc : "//d35uzl96cmnmq2.cloudfront.net/processed/Resort_A_750.jpg";
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
        <img src={this.renderImage()} className="tile-image" onClick={this.onTileClick.bind(this)}></img>
        <div className="title">{this.renderTitle()}</div>
        <div className="donation-amount">{this.renderAmount()}</div>
      </div>
    );
  }
}