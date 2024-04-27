import '../COMPO/commentc.css'
function CommentcData(props){

    let data = props.data
    return(
        <>
        <tr className="border">
            <td>{data.postId}</td>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.body}</td>
        </tr>
        </>
    )
}

export default CommentcData