import AsyncStorage from '@react-native-async-storage/async-storage';


const fetchProtectedData = async () => {
    try {
    
        const token = await AsyncStorage.getItem('token');
        console.log("Token: ", token);

        const response = await fetch(`${process.env.API_URL}/protected-route`, {
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
        console.error('Error', 'Something went wrong. Please try again later.');
    }
};

export default fetchProtectedData;