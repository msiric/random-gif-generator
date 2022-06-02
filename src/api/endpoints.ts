import { GIPHY_API_KEY, GIPHY_APPROPRIATE_RATING } from "../config/constants";

export const fetchRandomGIF = async (
  tag: string,
  rating = GIPHY_APPROPRIATE_RATING,
  apiKey = GIPHY_API_KEY
) => {
  const raw = await fetch(
    `http://api.giphy.com/v1/gifs/random?tag=${tag}&rating=${rating}&api_key=${apiKey}`
  );
  const response = await raw.json();

  if (response.meta?.status === 200) {
    return response;
  }

  const responseError = {
    type: "Error",
    message: response.meta?.msg,
    code: response.meta?.status,
  };

  let error = new Error();
  error = { ...error, ...responseError };
  throw error;
};
