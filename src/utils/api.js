import axios from "axios";

const options = {
  method: 'GET',
  url: import.meta.env.VITE_YOUTUBE_URL,
  params: {
    id: 'kJQP7kiw5Fk',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key': '87b4944717mshba735a6302cce5cp1229efjsnb0a4e888f293',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_YOUTUBE_URL}/${url}`,
      options
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("fetch API :: error ::", error);
  }
};
