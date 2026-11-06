import { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [number,setnumber]=useState("")

  const navigate=useNavigate()

  const handelsubmit=async(e)=>{
    e.preventDefault()
    await axios.post("https://cloudeploy-7328.onrender.com/create",{name,email,number})
    navigate("/")
  }


  return (  
    <div>
     
      <form action="" onSubmit={handelsubmit}>
        <p>
          Name:
          <input type="text" name="name" onChange={(e)=>setname(e.target.value)}/>
        </p>
        <p>
          Email:
          <input type="email" name="email" onChange={(e)=>setemail(e.target.value)}/>
        </p>
        <p>
          Number:
          <input type="number" name="number" onChange={(e)=>setnumber(e.target.value)} />
        </p>
        <input type="submit" value={"Create"} />
      </form>
    </div>
  )
}

export default Create