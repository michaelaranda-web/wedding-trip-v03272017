import React from 'react';
import { Link, withRouter } from 'react-router';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class HeaderDropdownMenu extends React.Component {
	constructor(props) {
		super(props);
	}

  onDropdownTitleClick() {
    this.props.router.push('/adventures');
  }

	render() {
	  return (
			<div className="header-dropdown-menu">
				<SplitButton title={this.props.title}
										 id={`our-adventures-dropdown`}
										 onClick={this.onDropdownTitleClick.bind(this)}
				>
					<LinkContainer to={{ pathname: 'japan'}}>
						<MenuItem eventKey="1">Japan</MenuItem>
					</LinkContainer>
					<LinkContainer to={{ pathname: 'taiwan'}}>
						<MenuItem eventKey="2">Taiwan</MenuItem>
					</LinkContainer>
					<LinkContainer to={{ pathname: 'hawaii'}}>
						<MenuItem eventKey="3">Hawaii</MenuItem>
					</LinkContainer>
				</SplitButton>
			</div>
	  );
  }		
}

export default withRouter(HeaderDropdownMenu);