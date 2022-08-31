import axios from 'axios'
import { toast } from 'react-toastify'

const customId = 'error-message'

export const getUsers = () =>
  axios.get((process.env.REACT_APP_BASE_URL + '.json'))
    .then(response => {
      return (response.data)
    })
    .catch((err) => {
      toast.error('Users not found !', {
        toastId: customId
      })
      return Promise.reject(err)
    })

export const getAssets = (id) =>
  axios.get(process.env.REACT_APP_BASE_URL + '/' + id + '/items.json')
    .then(response => {
      return (response.data)
    })
    .catch((err) => {
      toast.error('Items not found !', {
        toastId: customId
      })
      return Promise.reject(err)
    })
