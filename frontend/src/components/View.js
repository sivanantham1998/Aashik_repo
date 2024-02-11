import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function View()
{
    const backend="http://localhost:2001"
    const [view,setview]=useState([])
    useEffect(()=>{
        axios.get(backend)
        .then((read)=>{
            setview(read.data)
        })
    },[])


    function del(id)
    {
        axios.delete(`${backend}/${id}`)
        .then(
            axios.get(backend).then((red)=>setview(red.data))
        )
    }

    const page=useNavigate()
    function ed(id,name,email,password)
    {
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        page("/edit")
    }
    return(
        <>
            <h1>
                Read data
            </h1>


            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>Operation</th>
                </tr>

                {view.map((data)=>(
                    <tr>
                        <td>
                            {data.name}
                        </td>
                        <td>
                            {data.email}
                        </td>
                        <td>
                            {data.password}
                        </td>
                        <td>
                            <button onClick={()=>del(data._id)}>Remove</button>
                            <button  onClick={()=>ed(data._id,data.name,data.email,data.password)}>Update</button>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}