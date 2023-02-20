import { useState } from 'react';
import '../publication.css';

let Comments = ({ comments, handleChange, addComment, comment, updateComment, authorizedUserId }) => {
    let [editMode, setEditMode] = useState({ mode: false, id: null, user_id: null })
    let [updateCommentText, setUpdateCommentText] = useState('')

    let activateEditMode = (id, text, user_id) => {
        if (authorizedUserId.id == user_id) {
            setEditMode({ mode: true, id: id, user_id: user_id })
            setUpdateCommentText(text)
        }
    }
    let onChangeCommentText = ({ target: { value } }) => {
        setUpdateCommentText(value)
    }
    let deactivateEditMode = (item) => {
        setEditMode({ mode: false, id: null })
        if (updateCommentText.length != 0) {
            updateComment({
                id: item.id,
                publication_id: item.publication_id,
                text: updateCommentText,
                login: authorizedUserId.login
            })
        }
    }
    return (
        <div className='comments-container'>
            <div>
                <input className='comments-input' placeholder='Enter comment text' onChange={handleChange} value={comment} />
                <button disabled={authorizedUserId.id == null || comment.length == 0} onClick={addComment} className='comments-button'>Add</button>
            </div>
            <div>
                {comments.map((item) =>
                    editMode.mode == true & editMode.id == item.id ?
                        <div className='comment-container' key={item.id}>
                            <input className='comments-update-input'
                                autoFocus={true}
                                value={updateCommentText}
                                onChange={onChangeCommentText}
                                onBlur={() => { deactivateEditMode(item) }}
                            />
                        </div>
                        :
                        <div className='comment-container'
                            key={item.id}
                            onDoubleClick={() => { activateEditMode(item.id, item.text, item.user_id) }}>
                            <div className='comment'>
                                <div className='comment-author'>{item.login}</div>
                                <span>{item.text}</span>
                            </div>
                        </div>
                )}
            </div>
        </div>
    );
}

export default Comments;