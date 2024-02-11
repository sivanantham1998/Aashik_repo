import axios from "axios"
import { useState } from "react"
import View from "./View"

export default function Register()
{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const backend="http://localhost:2001"
    const save=(e)=>{
        e.preventDefault();
        axios.post(backend,{name:name,email:email,password:password})
        .then(()=>{alert("Data saved")})
        .then(()=>{window.location.reload()})
        .catch((err)=>console.log(err))
    }
    return(
        <>
            <h1>Data upload</h1>

            <form onSubmit={save}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button type="submit">Save</button>
            </form>

            <View/>
        </>
    )
}