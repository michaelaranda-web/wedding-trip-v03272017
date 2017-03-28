import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export class Home extends React.Component {
 
  render() {
    return (
      <div className="home-page">
        <div className="bride-and-groom col-sm-4" />
        <div className="home-content col-sm-8">
        	<h1>Martina and Michael's Wedding&nbsp;Trip&nbsp;2017</h1>
          <div className="welcome-message">
            <div className="col-sm-6 left-section">
              Welcome
              <p>This is some test text I am putting in to see what happens.</p>
            </div>
            <div className="col-sm-6 right-section">
              <ul>
                <li>Trip Itinerary</li>
                <li>Our Story</li>
                <li>Donate to Trip Fund</li>
              </ul>
            </div>
          </div>
        	<div className="wedding-cakes-section">
            <LinkContainer to={{ pathname: 'japan'}}>
              <div className="wedding-cake japan" >
                <span className="cake-title">Japan ></span>
              </div>
            </LinkContainer>
            <LinkContainer to={{ pathname: 'taiwan'}}>
              <div className="wedding-cake taiwan" >
                <span className="cake-title">Taiwan ></span>
              </div>
            </LinkContainer>
            <LinkContainer to={{ pathname: 'hawaii'}}>
              <div className="wedding-cake hawaii" >
                <span className="cake-title">Hawaii ></span>
              </div>
            </LinkContainer>
            <div className="wedding-cake-table" />
          </div>
        </div>
        <div className="bottom-section col-sm-12"></div>
      </div>
    );
  }
}