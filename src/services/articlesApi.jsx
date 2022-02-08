import axios from 'axios'

const fetchArticlesWithQuery = (url, searchQuery) => {
  return axios
    .get(`${url}search?query=${searchQuery}`)
    .then((response) => response.data.hits)
}

export default fetchArticlesWithQuery
