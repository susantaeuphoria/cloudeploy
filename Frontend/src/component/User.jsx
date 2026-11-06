import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function User() {
  const [api, setapi] = useState([])

  const navigate=useNavigate()

  const getapi = async () => {
    const result = await axios.get("https://cloudeploy-7328.onrender.com/");
    console.log(result.data);
    setapi(result.data)

  };

  const deletefunction = async (id) => {
    console.log(id);
    axios.delete("https://cloudeploy-7328.onrender.com/delete/"+id); // send id in Backend
    window.location.reload()
  }

  const editedata=async(id)=>{
    navigate(`/update/${id}`)
  }

  useEffect(() => {
    getapi()
  }, [])

  return <div>
     <Link to={"/create"}>Create</Link>
    <table border={1}>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>Action</th>
      </tr>
      {
        api.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>
                <button onClick={()=>editedata(user._id)}>Edite</button>
                <button onClick={() => deletefunction(user._id)}>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </table>
  </div>;
}

export default User;
