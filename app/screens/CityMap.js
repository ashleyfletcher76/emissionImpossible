import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import { GridPoligon } from '../components/GridPoligon';
import { Grid } from '../components/CityGrid';
import { getCurrentPosition } from '../components/getCurrentPosition';

export const CityMap = () => {
    const [location, setLocation] = useState({
        latitude: 49.152, // Default Latitude
        longitude: 9.216, // Default Longitude
    });
    const [error, setError] = useState(null);

	
    useEffect(() => {
		const fetchLocation = async () => {
			getCurrentPosition().then((pos) => {
				setLocation(pos);
			}).catch(err => {
				setError(err);
			});
		}

        fetchLocation();
    }, []); // Empty dependency array to run this effect only once

    return (
        <View style={styles.container}>
            {/* If there's an error, show it as a message */}
            {error && (
                <Text style={styles.errorText}>{error.message || "Unknown error"}</Text> // Render error message if available
            )}
            <MapView
                style={styles.map}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                    title="Your Location"
                    description="This is where you are!"
                />
				<Marker
                    coordinate={{
                        latitude: 49.152,
                        longitude: 9.216,
                    }}
                    title="Bus Line 42"
                    description="This icon follows bus line 42"
                    image={require('../../assets/bus.png')} // Replace with your local image path
                />
				<Marker
                    coordinate={{
                        latitude: 49.16,
                        longitude: 9.208,
                    }}
                    title="Mate's Bike"
                    description="Your Friend Mate is riding his bike to work!"
                    image={require('../../assets/bike.png')} // Replace with your local image path
                />
				<Marker
                    coordinate={{
                        latitude: 49.157,
                        longitude: 9.216,
                    }}
                    title="Ashley Fletcher"
                    description="Your Friend Ashely is walking to school today!"
                    image={require('../../assets/profile_images/user1.png')} // Replace with your local image path
                />
				{/* <Grid rows={40} columns={35} latstart={49.125} lontstart={9.203}/> */}
                {/* <GridPoligon x={49.151} y={9.215} opacity={1} /> */}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    errorText: {
        color: 'red', // Make the error message red
        padding: 10,
    },
});
