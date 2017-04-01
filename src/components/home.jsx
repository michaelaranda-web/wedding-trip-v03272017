import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export class Home extends React.Component {
 
  render() {
    return (
      <div className="home-page">
        <div className="bride-and-groom col-sm-4" />
        <div className="home-content col-sm-8">
        	<h1>Martina&nbsp;and&nbsp;Michael's Wedding&nbsp;Trip&nbsp;2017</h1>
          <div className="welcome-message col-xs-12">
            <div className="col-sm-6 col-xs-12 left-section">
              <p>Documenting the <strong>M&M Wedding Trip</strong> -- A wedding celebration where we get to have our cake and eat it too.</p>
            </div>
            <div className="col-sm-6 col-xs-12 right-section">
              <div>
                <Link to='/adventures'>Trip Itinerary</Link>
              </div>
              <div>
                <Link to='/story'>The M&M Story</Link>
              </div>
              <div>
                <Link to='/donate'>Sponsor Our Trip</Link>
              </div>
            </div>
          </div>
        	<div className="wedding-cakes-section col-xs-12">
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
      </div>
    );
  }
}