const axios = require('axios');

const getRes = async () => {
  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails',
    params: {
      restaurantsId: 'Restaurant_Review-g304554-d8010527-Reviews-Saptami-Mumbai_Maharashtra',
      currencyCode: 'USD'
    },
    headers: {
      'X-RapidAPI-Key': '637e100678msh2359b26a218ff1dp11a261jsn0d8f75f44bd3',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
module.exports=getRes;

