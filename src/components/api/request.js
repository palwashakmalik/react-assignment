import axios from 'axios'

export const getUsers = () =>
  axios.get((process.env.REACT_APP_BASE_URL + '.json'))
    .then(response => {
      console.log(response)
      return (response.data)
    })
    .catch(error => console.log(error))

export const getAssets = (id) =>
  axios.get(process.env.REACT_APP_BASE_URL + '/' + id + '/items.json')
    .then(response => {
      console.log(response)
      return (response.data)
    })
    .catch(error => console.log(error))
