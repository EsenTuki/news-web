import '../publication.css';

let Comments = ({ comments, handleChange, addComment, comment }) => {

    return (
        <div>
            <div>
                <textarea onChange={handleChange} value={comment} />
                <button onClick={addComment}>Add</button>
            </div>
            <div>
                {comments.map((item) =>
                    <div key={item.id}>
                        {item.text}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Comments;