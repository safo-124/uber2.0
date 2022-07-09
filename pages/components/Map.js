
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FmbzEyIiwiYSI6ImNsNG40eXl0MDAyZGszY3BmZnY1a3hlMDUifQ.YshJPIov06LUR8OhM6umqg';

const Map = (props) => {
    
     useEffect(()=> {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [0.03, 5.70],
      zoom: 10
    });

    if(props.pickupCoordinates){
      addToMap(map, props.pickupCoordinates)

    }
    
    if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)

    }
    
    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
      // Create a default Marker and add it to the map.
      const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);


  }
  




  return <Wrapper id='map'></Wrapper>
  
}

export default Map

const Wrapper = tw.div`
flex-1
`