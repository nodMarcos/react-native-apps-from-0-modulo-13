
import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Pin from './src/components/Pin';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: -20.4695225,
        longitude: -54.6016767,
        latitudeDelta:0.0015,
        longitudeDelta:0.0121
      },
      destLocation: null
      
    };

  }
  
  render() {
    const {region} = this.state;

    console.log(region)

    return (
      <View style={styles.container}>

        <MapView
          ref={(map)=>{this.map = map}}
          style={styles.mapa}
          region={region}
          loadingEnabled
          showsUserLocation
        >
          {this.state.destLocation && (
            <MapViewDirections 
              origin={this.state.region}
              destination={this.state.destLocation}
              apikey="AIzaSyBoJq8KXM6rA23iqX1kSKJaHFwVok5ZSLQ"
              strokeWidth={5}
              strokeColor="#000"
            />

        
          )}
        </MapView>

        <ScrollView style={styles.box} horizontal={true} showsHorizontalScrollIndicatior={false}>
          <View style={styles.localView }>
            <TouchableOpacity style={styles.localBtn} onPress={() => { this.setState({destLocation: {
              latitude: -20.4634685,
              longitude: -54.6108303
            }})}}>
              <Text style={styles.localText}>BK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.localView }>
            <TouchableOpacity style={styles.localBtn}>
              <Text style={styles.localText}>Shopping</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.localView }>
            <TouchableOpacity style={styles.localBtn} onPress={() => { this.setState({destLocation: {
              latitude: -20.4615409,
              longitude: -54.5919008
            }})}}>
              <Text style={styles.localText}>Farmácia</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.localView }>
            <TouchableOpacity style={styles.localBtn}>
              <Text style={styles.localText}>Bar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.localView }>
            <TouchableOpacity style={styles.localBtn}>
              <Text style={styles.localText}>Sushi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.localView }>
            <TouchableOpacity style={styles.localBtn}>
              <Text style={styles.localText}>Trabalho</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  mapa:{
   flex: 1,
  },
  box: {
    position: 'absolute',
    top: 50,
    margin: 10,
    height: 70

  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localBtn: { 
    backgroundColor: '#FF0000',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localText: { 
    color: '#Fff'
  }
});