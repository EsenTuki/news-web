import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ADD_COMMENT,UPDATE_COMMENT, ContextApp } from "../../reducers/newsReducer";
import './publication.css';
import Comments from "./comments/Comments";

let Publication = () => {
    const { id } = useParams()
    const { dispatch, state:{news, comments, authorizedUserId} } = useContext(ContextApp)
    const [comment, setComment] = useState('')

    let data = news.find(item => item.id == id)
    let publicationComments = comments.filter(item => item.publication_id == id)

    let payload = {
        id: id,
        comment: {
            id: comments ? comments.length + 1 : 2,
            text: comment,
            publication_id: id,
            user_id:authorizedUserId.id,
            login:authorizedUserId.login
        }
    }

    let handleChange = ({ target: { value } }) => {
        setComment(value)
    }

    let addComment = () => {
        setComment('')
        dispatch({ type: ADD_COMMENT, payload })
    }

    let updateComment = (comment) => {
        let payload = comment
        dispatch({ type: UPDATE_COMMENT, payload })
    }

    return (
        <div className="container">
            <h1 className="publication-header"><b>{data.title}</b></h1>
            <div className="publication-info">
                <img className="publication-img" src={data.urlToImage} />
                <p className="pubclication-description"><b>{data.description}</b></p>
            </div>
            <p className="pubclication-content">{data.content}</p>

            <Comments 
            comments={publicationComments} 
            handleChange={handleChange} 
            addComment={addComment} 
            comment={comment} 
            updateComment={updateComment}
            authorizedUserId={authorizedUserId}
            />
        </div>
    );
}

export default Publication;