import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const UsersContainer = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/users.json')
      .then(response => {
        console.log(response)
        setUsers(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>User Listing</h1>
      <div className='d-flex flex-wrap'>
        {users.map((user) => {
          return (
            <Card style={{ width: '18rem', padding: '10px', margin: '20px' }} key={user.id}>
              <Card.Img variant='top' src={user.avatar} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  {user.age}
                  {user.location_history.longitude}, {user.location_history.latitude} <br />
                  <br />{user.email}
                  <br />{user.gender}
                </Card.Text>
                <Link to={'/users/' + user.id}>Inventory</Link>
              </Card.Body>
            </Card>
          )
        })}
      </div>

    </div>
  )
}

export default UsersContainer
