const API_URL = import.meta.env.VITE_APP_API_KEY;

const getImages = async (nextCursor) => {
  const params = new URLSearchParams();

  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }
  const response = await fetch(`${API_URL}/photos?${params}`);
  const responseJson = await response.json();

  return responseJson;
};

const searchImages = async (searchValue, nextCursor) => {
  const params = new URLSearchParams();
  params.append(`expression`, searchValue);

  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }

  const response = await fetch(`${API_URL}/search?${params}`);
  const responseJSon = await response.json();
  return responseJSon;
};

export { getImages, searchImages };
