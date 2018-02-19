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
        <div id="sticky" className="menu-invisible">
        </div>
      )
    }
  }

export default StickyMenu;
