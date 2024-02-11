import { useNavigate } from "react-router-dom"

export default function Homepage()
{
    const page=useNavigate()

    const crud=()=>{
        page("/crud")
    }
    return(
        <>
            <button onClick={crud}>GO</button>
        </>
    )
}