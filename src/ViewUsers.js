import axios from "axios";
import { useState } from "react";

function ViewUsers()
{
    const [users,setUsers]=useState([]);
    //let users=[];
    function onGetData()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response.data)
            setUsers(response.data)
            
    })
    .catch(error=>console.log(error));
    }
return<div>
    <h1>All Users...</h1>
    <table align="center" width="50%" border={1}>
    <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        </tr>
        </thead>
    <tbody>
        {
            users.map((us,index)=>{
                return<tr key={index}>
                    <td>{us.id}</td>
                    <td>{us.name}</td>
                    <td>{us.username}</td>
                    <td>{us.email}</td>
                </tr>
            })
        }
    </tbody>
    </table>
  
    <button onClick={onGetData}>GetUsers</button>
</div>
}
export default ViewUsers; 