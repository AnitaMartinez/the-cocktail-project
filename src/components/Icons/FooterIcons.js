import React, { Component } from 'react';
import IconMarker from './IconMarker';
import Star from './Star';


class FooterIcons extends Component {
  render() {
    return(
    <div className={this.props.className}>
      <Star className="footer-star"/>
      <IconMarker className="icon-marker-footer"/>
      <Star className="footer-star-desktop"/>
    </div>
    )
  }
}

export default FooterIcons;
