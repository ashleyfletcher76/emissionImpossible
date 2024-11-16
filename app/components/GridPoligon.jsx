import { Polygon } from 'react-native-maps';

export const GridPoligon = ({x, y, opacity}) => {
	return <Polygon
			coordinates={[
				{ latitude: 49.152 + (0.001 * x), longitude: 9.217 + (0.001 * y) },
				{ latitude: 49.152 + (0.001 * x), longitude: 9.216 + (0.001 * y) },
				{ latitude: 49.153 + (0.001 * x), longitude: 9.216 + (0.001 * y) },
				{ latitude: 49.153 + (0.001 * x), longitude: 9.217 + (0.001 * y) },
			]}
			fillColor={`rgba(255, 0, 0, ${opacity * 0.5})`}
			strokeColor="rgba(0, 0, 0, 0)"
			strokeWidth={2}
		/>;
}
