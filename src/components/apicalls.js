import axios from 'axios'

export const getData = (url) =>
  axios.get(url)
    .then(response => {
      console.log(response)
      return (response.data)
    })
    .catch(error => console.log(error))
