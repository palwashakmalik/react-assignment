import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from './apicalls.js'

export const ItemsContainer = () => {
  const [items, setItems] = useState([])
  const { id } = useParams()

  useEffect(() => { getData(process.env.REACT_APP_BASE_URL + '/' + id + '/items.json').then((response) => setItems(response)) }, [id])

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
