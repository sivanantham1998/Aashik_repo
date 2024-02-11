import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"

export default function Update()
{
    const [id,setid]=useState(0)
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const page=useNavigate()
    const backend="http://localhost:2001"
    const save=(e)=>{
        e.preventDefault();
        axios.put(`${backend}/${id}`,{name:name,email:email,password:password})
        .then(()=>{alert("Data updated")})
        .then(()=>page("/"))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        setid(localStorage.getItem("id"));
        setname(localStorage.getItem("name"))
        setemail(localStorage.getItem("email"))
        setpassword(localStorage.getItem("password"))
    },[])
    return(
        <>
        <h1>Update ur data</h1>
         <form onSubmit={save}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </>
    )
}