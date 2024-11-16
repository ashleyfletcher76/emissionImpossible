import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import { GridPoligon } from '../components/GridPoligon';
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
                <GridPoligon x={0} y={0} opacity={1} />
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
