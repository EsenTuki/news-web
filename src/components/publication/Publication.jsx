import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { ADD_COMMENT, ContextApp } from "../../reducers/newsReducer";

let Publication = () => {
    const { id } = useParams()
    const { dispatch, state } = useContext(ContextApp)

    let data = state.news.filter(item => item.id == id)

    let addComment = () =>{
        dispatch({type:ADD_COMMENT})
    }
    console.log('data',data)
    return (
        <div className="container">
            <h1 style={{ borderBottom: "1px solid #ddd" }}><b>{data[0].title}</b></h1>
            <img style={{ width: "40%" }} src={data[0].urlToImage} />
            <p style={{ fontSize: "20px" }}>{data[0].content}</p>
            <div>
                <div>
                    <textarea /> <button onClick={addComment}>Add</button>
                </div>
                <div>
                    {data[0].comments.map((item) => <div key={item.id}>
                        {item.text}
                    </div>)}
                </div>

            </div>
        </div>
    );
}

export default Publication;