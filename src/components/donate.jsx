import React from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

export class Donate extends React.Component {

  renderDonationOptions() {
    return (
      <div>
        <h2>Donation Options</h2>
        <div>
          <h4>Via Check</h4>
          <p>If you do not have our home address, please feel free to send an e-mail at michaelaranda0@gmail.com and we will reply back with it.</p>
        </div>
        <div>
          <h4>Via Paypal</h4>
          <p>michaelaranda0@gmail.com</p>
        </div>
        <div>
          <h4>Via Venmo</h4>
          <p>@Michael-Aranda-1</p>
        </div>
        <div>
          <h4>Via HoneyFund</h4>
          <p>Coming soon...</p>
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

        <div className="donation-section col-xs-12">
          <p className="explanation">As part of the M+M wedding tour, the traditional wedding registry has been replaced with a trip funder! Instead of the usual toasters, pots, and pans, if you would like to wish us well with a wedding gift, you can choose to sponsor one of our trip's snacks, meals, souvenirs or activities. A straightforward donation is also possible and highly appreciated!</p>

          <Tab.Container id="donation-browser" defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={3} className="donation-categories">
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first">
                    Food
                  </NavItem>
                  <NavItem eventKey="second">
                    Activities
                  </NavItem>
                  <NavItem eventKey="third">
                    Miscellaneous
                  </NavItem>
                  <NavItem eventKey="fourth">
                    Monetary
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={9} className="donation-tab-content">
                <Tab.Content animation>
                  <Tab.Pane eventKey="first" className="coming-soon-placeholder">
                    Coming Soon...
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="coming-soon-placeholder">
                    Coming Soon...
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" className="coming-soon-placeholder">
                    Coming Soon...
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth" className="monetary-donation-tab-content">
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