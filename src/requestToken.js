import axios from 'axios';
export const getToken = async () => {
  // récupère les clés Spotify
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  // données avec les clés pour s'identifier à l'API de Spotify
  const data = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
  };
  // Appel pour récupérer le token valable 1 heure
  try {
    const res = await axios.post(
      'https://accounts.spotify.com/api/token',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    // retourne le token
    return res.data.access_token;
  } catch (error) {
    console.error('Error retrieving access token:', error);
    throw error;
  }
};
