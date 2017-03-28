import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export class Adventures extends React.Component {
 
  render() {
    return (
      <div className="adventures-page col-xs-12">
        <div className="header-section">
          <div className="title">
            Our <span className="floating-heads"></span> Adventures!
          </div>
        </div>

        <div className="adventure-icons-section">
          <div className="col-xs-12 col-md-4 icon">
            <LinkContainer to={{ pathname: 'japan'}}>
              <div className="icon-image japan"></div>
            </LinkContainer>
            <div className="icon-title">JAPAN</div>
            <div className="icon-subtitle">April 16 - April 20</div>
          </div>

          <div className="col-xs-12 col-md-4 icon">
            <LinkContainer to={{ pathname: 'taiwan'}}>
              <div className="icon-image taiwan"></div>
            </LinkContainer>
            <div className="icon-title">TAIWAN</div>
            <div className="icon-subtitle">April 21 - April 25</div>
          </div>

          <div className="col-xs-12 col-md-4 icon">
            <LinkContainer to={{ pathname: 'hawaii'}}>
              <div className="icon-image hawaii"></div>
            </LinkContainer>
            <div className="icon-title">HAWAII</div>
            <div className="icon-subtitle">April 26 - April 30</div>
          </div>
        </div>
      </div>
    );
  }
}