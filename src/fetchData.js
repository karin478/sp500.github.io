const fetchData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_TOKEN',
      },
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/sp500/prediction/', requestOptions);
      if (response.ok) {
        const data = await response.json();
        return data.prediction;
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export default fetchData;
  