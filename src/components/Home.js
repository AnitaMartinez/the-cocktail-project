import React, { Component } from 'react';
import IconMarker from './Icons/IconMarker';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import EmptyState from './EmptyState';
import AllCards from './AllCards';




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

    const {stopsBus, selectedStop} = this.props.state;
    let markers= null;
    let noResults= null;
    if(this.props.datafetch) {
      if (stopsBus.length > 0) {
        markers= stopsBus.map((stop, index) => {
          return (
            <Marker
              lng={stop.longitude}
              lat={stop.latitude}
              key={index}
              stop={stop}
              selected = { stop.stopId === selectedStop }
              stopId={stop.stopId}
              setCurrentStop={this.props.setCurrentStop}
            />
          )
        });
      } else {
        noResults= <EmptyState/>
      }
    }

    return(
      <div>

      <div className= "intro">
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

      <div className="map" id="map">
        <GoogleMapReact
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.defaultZoom}
          center={this.props.center}
          zoom={this.props.zoom}
          bootstrapURLKeys={{key: 'AIzaSyC7n0BhHlxsVU_li9hGJMFIFbYQcFqaggw'}}
        >
          {markers}
        </GoogleMapReact>
      </div>

      <AllCards
        loading={this.props.loading}
        hidden={this.props.hidden}
        noResults={noResults}
        currentPage={this.props.currentPage}
        elementsPerPage={this.props.elementsPerPage}
        stopsBus={this.props.stopsBus}
        selectedStop={this.props.selectedStop}
        setCurrentStop={this.props.setCurrentStop}
        setCurrentPage= {this.props.setCurrentPage}
      />
      </div>
    )
  }
}



export default Home;
