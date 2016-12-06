import React from 'react';
import styles from '../sass/about.scss';
import key from '../../apiKey.json';
class About extends React.Component {
  constructor () {
    super();
    // this.initMap = this.initMap.bind(this);
    this.loadSrc = this.loadSrc.bind(this);
  }

  // initMap() {
  //   const uluru = {lat: -25.363, lng: 131.044};
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,

  //   });
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }
  loadSrc() {
    const src=`https://maps.googleapis.com/maps/api/js?key=${key.googleMaps}&callback=initMap`
    console.log(src);
  }

  componentDidMount() {
    const uluru = {lat: -25.363, lng: 131.044};
    this.map = new google.maps.Map(this.refs.map, {
      center: uluru,
      zoom: 16
    });
  }

  render() {
    this.loadSrc();
    return (
      <div id={styles.container}>
        <div id={styles.portrait}>
        </div>
        <div id={styles.description}>
        </div>
        <div id={styles.map} ref="map">
        </div>
      </div>
    )
  }
}

export default About;