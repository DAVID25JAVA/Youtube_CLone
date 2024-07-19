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
    'x-rapidapi-key': '0900990f2emsh303ee40d6f12fe4p16196ajsn6e88cc271862',
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
