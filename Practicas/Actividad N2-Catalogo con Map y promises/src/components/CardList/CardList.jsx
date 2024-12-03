import { useEffect, useState } from 'react';
import './CardList.css';
import CardUser from '../CardUser/CardUser';

const CardList = () => {
  const [users, setUsers] = useState([])

  console.log("users" , users);

  useEffect(() => {
    fetch("https://api.github.com/users")
    .then((info) => info.json())
    .then((data) => setUsers(data));
  },[]);
  
  return (
    <div className='grid'>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <CardUser user={user} />
          </div>
        )
      })}    
    </div>
  )
};

export default CardList;