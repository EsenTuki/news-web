import { useState } from 'react';
import '../publication.css';

let Comments = ({ comments, handleChange, addComment, comment, updateComment }) => {
    let [editMode, setEditMode] = useState({ mode: false, id: null })
    let [updateCommentText, setUpdateCommentText] = useState('')
    let activateEditMode = (id,text) => {
        setEditMode({ mode: true, id: id })
        setUpdateCommentText(text)
    }
    let onChangeCommenttext = ({ target: { value } }) => {
        setUpdateCommentText(value)
    }
    let deactivateEditMode = (item) => {
        setEditMode({ mode: false, id: null })
        updateComment({id:item.id, publication_id:item.publication_id,text:updateCommentText})
    }
    return (
        <div className='comments-container'>
            <div>
                <input className='comments-input' placeholder='Enter comment text' onChange={handleChange} value={comment} />
                <button onClick={addComment} className='comments-button'>Add</button>
            </div>
            <div>
                {comments.map((item) =>
                    editMode.mode == true & editMode.id == item.id ?
                        <div className='comment-container' key={item.id}>
                            <input className='comments-update-input'
                                autoFocus={true}
                                value={updateCommentText}
                                onChange={onChangeCommenttext}
                                onBlur={() => { deactivateEditMode(item) }}
                            />
                        </div>
                        :
                        <div className='comment-container'
                            key={item.id}
                            onDoubleClick={() => { activateEditMode(item.id,item.text) }}>
                            <div className='comment'>
                                <div className='comment-author'>Sagyndyk</div>
                                <span>{item.text}</span>
                            </div>
                        </div>
                )}
            </div>
        </div>
    );
}

export default Comments;