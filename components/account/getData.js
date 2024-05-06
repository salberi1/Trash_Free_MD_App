import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchProtectedData = async () => {
    try {
        const token = await AsyncStorage.getItem('token');

        const response = await fetch('http://10.0.0.79:3000/protected-route', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error fetching protected data');
        }
    } catch (error) {
        throw new Error('Error fetching protected data');
    }
};

export default fetchProtectedData;