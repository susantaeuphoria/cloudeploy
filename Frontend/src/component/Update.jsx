import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")
  const { id } = useParams()

  const navigate = useNavigate()

  const handelgetdata = async () => {
    const data = await axios.get("https://cloudeploy-7328.onrender.com/getdata/" + id);
    console.log(data.data);
    setname(data.data.name)
    setemail(data.data.email)
    setnumber(data.data.number)
  }

  const handelsubmit = async (e) => {
    console.log("hello");

    e.preventDefault()
    const data = await axios.put("https://cloudeploy-7328.onrender.com/update/" + id, {
      name, email, number
    });

    navigate("/")

  }

  useEffect(() => {
    handelgetdata()
  }, [])

  return (
    <div>
      <form action="" onSubmit={handelsubmit}>
        <p>
          Name:
          <input type="text" value={name} name="name" onChange={(e) => setname(e.target.value)} />
        </p>
        <p>
          Email:
          <input type="email" value={email} name="email" onChange={(e) => setemail(e.target.value)} />
        </p>
        <p>
          Number:
          <input type="number" name="number" value={number} onChange={(e) => setnumber(e.target.value)} />
        </p>
        <input type="submit" value={"Update"} />
      </form>
    </div>
  )
}

export default Update