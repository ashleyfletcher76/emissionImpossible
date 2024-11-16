import { Polygon } from 'react-native-maps';

export const GridPoligon = ({x, y, opacity}) => {
	return <Polygon
			coordinates={[
				{ latitude: x, longitude: y + 0.001},
				{ latitude: x, longitude: y },
				{ latitude: x + 0.001, longitude: y },
				{ latitude: x + 0.001, longitude: y + 0.001 },
			]}
			fillColor={`rgba(255, 0, 0, ${opacity * 0.5})`}
			strokeColor="rgba(0, 0, 0, 0)"
			strokeWidth={2}
		/>;
}
