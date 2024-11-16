// const getCurrentPosition = () => {
//     return new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     resolve({
//                         latitude: position.coords.latitude,
//                         longitude: position.coords.longitude,
//                     });
//                 },
//                 (error) => {
//                     reject(`Error retrieving position: ${error.message}`);
//                 },
//                 {
//                     enableHighAccuracy: true, // Use high accuracy mode for better precision
//                     timeout: 20000, // Maximum time to wait for location in ms
//                     maximumAge: 1000, // Time to cache the location in ms
//                 }
//             );
//         } else {
//             reject("Geolocation is not supported by this browser.");
//         }
//     });
// };

import * as Location from 'expo-location';

export const getCurrentPosition = async () => {
    // Request location permissions
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
    }

    // Get the user's current location
    let currentLocation = await Location.getCurrentPositionAsync({});
    return({
        longitude: currentLocation.coords.longitude,
        latitude: currentLocation.coords.latitude
    });
}