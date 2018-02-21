import React, { Component } from 'react';


class CodeSearcher extends Component {
  constructor(props) {
      super(props)
      this.state = {
        hidden : true
      }
    this.handleClickSearcher = this.handleClickSearcher.bind(this);
  }

  handleClickSearcher() {
    this.setState({hidden : !this.state.hidden});
  }

  render() {
    const showInput = this.state.hidden ? 'hidden' : '';
    return(
      <div className="code-wrapper">
        <button className="link-goUp no-style-button no-box-button center" onClick={this.handleClickSearcher}>Buscar por código postal</button>

        <div className={`${showInput} code-searcher`}>
          <input className="input-searcher" type="text" name="postal-code" placeholder="Introduce el código postal" />
          <button className= "home-button main-button button-light-font no-margin" type="button" name="button">Buscar</button>
        </div>
      </div>
    )
  }
}

export default CodeSearcher;
