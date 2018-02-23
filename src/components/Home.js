import React, { Component } from 'react';
import IconMarker from './Icons/IconMarker';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class Home extends Component {


  render(){

    const showInput = this.props.hidden ? 'hidden' : '';
    const inputProps = {
      value: this.props.street,
      onChange: this.props.onChange,
      placeholder: 'Nombre de la calle'
    }

    const cssClasses = {
      input : "input-searcher"
    }

    return(
      <div>

      <IconMarker className="marker-icon-intro" />
      <h2 className= "home-title introduction-title center">Bienvenido a BusApp</h2>
      <p className= "home-text introduction-body center">Para comenzar, elige una zona para descubrir las paradas disponibles</p>

      <div className= "home-menu-buttons">
        <a href="#map"><button onClick={() =>this.props.handleClickBilbao(40.429154,-3.701952)}  className= "home-button main-button button-light-font" type="button" name="button">Glorieta de bilbao</button></a>
        <a href="#map"><button onClick={() =>this.props.handleClickCocktail(40.454146,-3.700346)} className= "home-button main-button button-light-font" type="button" name="button">The cocktail</button></a>
        <a href="#map"><button onClick={() =>this.props.handleClickCampo(40.640772,-3.909992)} className= "home-button main-button button-light-font" type="button" name="button">El campo</button></a>
      </div>

      <div className="code-wrapper">
        <button className="link-goUp no-style-button no-box-button center" onClick={this.props.handleClickShowSearcher}>Buscar por dirección</button>

        <form className={`${showInput} code-searcher`} onSubmit={this.props.handleClickStreetSearcher}>
          <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses} />
          <button className="home-button main-button button-light-font" type="submit">Buscar</button>
        </form>
      </div>

      </div>
    )
  }
}



export default Home;
