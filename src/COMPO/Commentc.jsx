import { useEffect, useState } from "react"
import CommentcData from "./CommentcData";
import '../COMPO/commentc.css'

function Commentc(){

    const [comm, setComm] = useState([]);

    useEffect(()=>{
        async function commentc(){
            try{
                let comref = await fetch("https://jsonplaceholder.typicode.com/comments");
                let comjson  = await comref.json()
                setComm(comjson)

            }catch(err){
                console.log(err);
            }
        }
        commentc()
    },[])
    return(
        <>
        <table>
            <thead>
                <tr className="border">
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {
                  comm.map((e,i)=>{
                    return(
                        <CommentcData data={e}/>
                    )
                  })
                }
            </tbody>
        </table>
        </>
    )
}

export default Commentc