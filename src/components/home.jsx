import React from 'react';

export class Home extends React.Component {
 
  render() {
    return (
      <div className="home-page">
        <div className="bride-and-groom col-sm-4" />
        <div className="home-content col-sm-8">
        	<h1>HEROKU TEST's Wedding Trip 2017</h1>
        	<div className="wedding-cakes-table">
            <div className="wedding-cakes" />
            <div className="table" />
          </div>
        </div>
        <div className="bottom-section col-sm-12">
          <div className="welcome-message"></div>
        </div>
      </div>
    );
  }
}