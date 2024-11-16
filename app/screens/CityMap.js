import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import { GridPoligon } from '../components/GridPoligon';

export const CityMap = () => {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 49.152, // Center Latitude
					longitude: 9.216, // Center Longitude
					latitudeDelta: 0.1, // Zoom Level Latitude
					longitudeDelta: 0.1, // Zoom Level Longitude
				}}
			>
				<Marker
					coordinate={{
						latitude: 49.152,
						longitude: 9.216,
					}}
					title="Hello Heilbronn!"
					description="This city is alright, but it has the best coders in the world!"
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
});
