import axios from "axios";
export const getToken = async () => {
  const clientId = process.env.REACT_APP_CLIENT_ID
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET

    const data={
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
      }
  
    try {
      const res = await axios.post("https://accounts.spotify.com/api/token",data,
     { headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
      return res.data.access_token;
    } catch (error) {
      console.error('Error retrieving access token:', error);
      throw error;
    }
  };
  