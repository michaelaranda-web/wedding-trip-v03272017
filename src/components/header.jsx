import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import HeaderDropdownMenu from './headerDropdownMenu.jsx';

export class Header extends React.Component {
	render() {
	  return (
	  	<div id="site-header">
	  		<div className="site-title col-xs-4"><Link to={`/`}>M+M 2017</Link></div>
	  		<div className="header-links">
					<HeaderDropdownMenu title="Our Adventures" />
					<Button className="button-link"><Link to={`/story`}>Our Story</Link></Button>
					<Button className="button-link"><Link to={`/donate`}>Donate</Link></Button>
	  		</div>
	  	</div>
	  );
  }		
}