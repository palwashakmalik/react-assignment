import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const ItemsContainer = () => {
  const [items, setItems] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/users/' + id + '/items.json')
      .then(response => {
        console.log(response)
        setItems(response.data)
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <div>
      <h1>Asset Listing</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Item Name </th>
            <th>Item Points</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item) => {
              return (
                <tr key={item.item_name}>
                  <td>{item.item_name} </td>
                  <td>{item.points} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default ItemsContainer
