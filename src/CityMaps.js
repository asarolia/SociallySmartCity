import React from 'react';
import NavBar from './navbar';
import Profile from './Profile';
import Feed from './Feed';
import ChatBox from './ChatBox';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Paper, Typography } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};


export class CityMaps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
        // binding this to event-handler functions
        // this.onMarkerClick = this.onMarkerClick.bind(this);
        // this.onMapClick = this.onMapClick.bind(this);
    }

    // onMarkerClick = (props, marker, e) => {
        // this.setState({
        //     selectedPlace: props,
        //     activeMarker: marker,
        //     showingInfoWindow: true
        // });
    // }
    // onMapClick = (props) => {
    //     if (this.state.showingInfoWindow) {
    //         this.setState({
    //             showingInfoWindow: false,
    //             activeMarker: null
    //         });
    //     }
    // }

    render() {

        return (
            <>
                <NavBar />
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    // onClick={this.onMapClick}
                    initialCenter={{
                        lat: 28.535517,
                        lng: 77.391029
                    }} >
                    <Marker
                        // onClick={this.onMarkerClick}
                        title={'Changing Colors Garage'}
                        position={{ lat: 39.648209, lng: -75.711185 }}
                        name={'Changing Colors Garage'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <Paper>
                            <Typography
                                variant='headline'
                                component='h4'
                            >
                                Changing Colors Garage
            </Typography>
                            <Typography
                                component='p'
                            >
                                98G Albe Dr Newark, DE 19702 <br />
                                302-293-8627
            </Typography>
                        </Paper>
                    </InfoWindow>
                    <Marker
                        name="Dolores park"
                        position={{ lat: 28.535517, lng: 77.391029 }}
                    />

                </Map>
            </>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'API_KEY'
})(CityMaps);
