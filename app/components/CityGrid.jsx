import { GridPoligon } from './GridPoligon';
import { Polygon } from 'react-native-maps';
// import { GridPoligon } from './GridPoligon';

export const Grid = ({ rows, columns, latstart, lontstart}) => {
    const grid = [];

    // Generate grid polygons
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            // Generate a random opacity for demonstration purposes
            const opacity = Math.random();

            grid.push(
                <GridPoligon x={latstart + x * 0.001} y={lontstart + y * 0.001} opacity={opacity} />
            );
        }
    }

    return <>{grid}</>; // Render all polygons
};