import React, { Component } from 'react';


class StickyMenu extends Component {

componentDidMount(){
  window.onscroll = function() {showSticky()};

  function showSticky() {
      if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
          document.getElementById("sticky").className = "sticky";
      } else {
          document.getElementById("sticky").className = "";
      }
  }
}


    render() {
      return(
        <div id="sticky" className="hidden">
          <h1 className="sticky-title padding-subtitle uppercase no-margin center">bus app</h1>
          <p className="sticky-subtitle padding-subtitle no-margin center">El mundo, en la palma de tu mano</p>
        </div>
      )
    }
  }

export default StickyMenu;
