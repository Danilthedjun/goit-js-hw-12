import axios from 'axios';

export default async function getImages(query, page) {
  const KEY = '42530509-bac56eefb83244286f2e71aac';
  const API_URL = 'https://pixabay.com/api/';
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SAFESEARCH = 'true';
  const PER_PAGE = 15;
  const LINK = `${API_URL}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&per_page=${PER_PAGE}&page=${page}`;

  const response = await axios.get(LINK);
  return response.data;
}
