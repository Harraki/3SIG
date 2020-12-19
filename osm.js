import React,{PureComponent} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import MapView, { UrlTile,PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

  const styles = StyleSheet.create({
   container: {
     ...StyleSheet.absoluteFillObject,
     height: 400,
     width: 400,
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
   map: {
     ...StyleSheet.absoluteFillObject,
   },
  });
  class App5 extends PureComponent {
    render()
    {
      return (
     <View style={styles.container}>
       <Text>Map</Text>
       <MapView region={{
          latitude: 33.5806464,
          longitude: -7.5464704,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
    style={styles.map}>
       <UrlTile
    /**
     * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
     * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
     */
    urlTemplate='https://b.tile.openstreetmap.fr/osmfr/6/30/25.png'
    /**
     * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
     * MKTileOverlay. iOS only.
     */
    maximumZ={19}
    /**
     * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
     * to be used. Its default value is false.
     */
    flipY={false}
  />
  </MapView>
     </View>)
    }
  };
  
  
export default App5;

