import React from 'react';
import { DonationTile } from './donationTile.jsx';
import { DonationForm } from './donationForm.jsx';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

export class Donate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "food",
      currentDonationItem: null
    }
  }

  onTabSelect(key) {
    this.setState({activeTab: key});
  }

  onTileSelect(donationItem) {
    this.setState({activeTab: "donate", currentDonationItem: donationItem});
  }

  renderFoodOptions() {
    return (
      <div className="tiles-section">
        <DonationTile onClickHandler={this.onTileSelect.bind(this)}
                      donationItem={{title: "Breakfast at Tsukiji Fish Market", amount: "$20"}}
                      imageSrc={require('../icons/tsukiji_breakfast.png')} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)}
                      donationItem={{title: "A Pony", amount: "$1,000"}}/>
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
      </div>
    );
  }

  renderActivityOptions() {
    return (
      <div className="tiles-section">
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
      </div>
    );
  }

  renderMiscellaneousOptions() {
    return (
      <div className="tiles-section">
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
        <DonationTile onClickHandler={this.onTileSelect.bind(this)} />
      </div>
    );
  }

  renderDonationOptions() {
    return (
      <div>
        <div className="col-sm-8">
          <DonationForm activeTab={this.state.activeTab}
                        currentDonationItem={this.state.currentDonationItem} />
        </div>

        <div className="donation-options col-sm-4">
          <h3>Sponsorship Options</h3>
          <div>
            <h4>Via Cash/Check</h4>
            <p>We can e-mail you our home address when you fill out this form.</p>
          </div>
          <div>
            <h4>Via Paypal</h4>
            <p>michaelaranda0@gmail.com</p>
          </div>
          <div>
            <h4>Via Venmo</h4>
            <p>@Michael-Aranda-1</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="donate-page">
        <div className="header-section">
          <div className="title">
            Sponsor <span className="floating-heads"></span> Our Trip!
          </div>
        </div>

        <p className="explanation">As part of the M+M wedding tour, the traditional wedding registry has been replaced with a trip funder! Instead of the usual toasters, pots, and pans, if you would like to wish us well with a wedding gift, you can choose to sponsor one of our trip's snacks, meals, souvenirs or activities. A straightforward donation is also possible and highly appreciated!</p>

        <div className="donation-section col-xs-12">
          <Tab.Container id="donation-browser" activeKey={this.state.activeTab} onSelect={this.onTabSelect.bind(this)}>
            <Row className="clearfix">
              <Col sm={3} className="donation-categories">
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="food">
                    Food
                  </NavItem>
                  <NavItem eventKey="activities">
                    Activities
                  </NavItem>
                  <NavItem eventKey="miscellaneous">
                    Miscellaneous
                  </NavItem>
                  <NavItem eventKey="donate">
                    Monetary
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={9} className="donation-tab-content">
                <Tab.Content animation>
                  <Tab.Pane eventKey="food" className="coming-soon-placeholder">
                    {this.renderFoodOptions()}
                  </Tab.Pane>
                  <Tab.Pane eventKey="activities" className="coming-soon-placeholder">
                    {this.renderActivityOptions()}
                  </Tab.Pane>
                  <Tab.Pane eventKey="miscellaneous" className="coming-soon-placeholder">
                    {this.renderMiscellaneousOptions()}
                  </Tab.Pane>
                  <Tab.Pane eventKey="donate" className="monetary-donation-tab-content">
                    {this.renderDonationOptions()}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}