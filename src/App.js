import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    try {
      const url = process.env.URL_ENDPOINT;
      const apiKey = process.env.APIKEY;

      const requestBody = {
        action: 'get-routes',
        uid: "leao.rafinha@gmail.com"
      };

      const config = {
        headers: {
          'x-api-key': apiKey
        }
      };

      const response = await axios.get(url, requestBody, config);
      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred.');
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Make API Request</button>
      <pre>{response}</pre>
	  
	  
    </div>
  );
}

export default App;
