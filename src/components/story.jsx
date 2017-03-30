import React from 'react';

export class Story extends React.Component {
  render() {
    return (
        <div className="story-page">
          <div className="header-section">
            <div className="title">
              Our <span className="floating-heads"></span> Story
            </div>
          </div>

          <div className="story-items">
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2008"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2009"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2010-2011"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2012"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2013"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2014-2015"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2015"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2015-2016"></div>
            </div>
            <div className="story-item col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2016"></div>
            </div>
            <div className="story-item year-2017 col-md-4 col-sm-6 col-xs-12">
              <div className="story-item-image year-2017"></div>
            </div>
          </div>
        </div>
    );
  }
}