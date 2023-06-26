import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Abhinay');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            //history.go(-1);
            history.push('/');
            setIsPending(false);
        })

    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />

                <label>Blog Body:</label>
                <textarea 
                    cols="30" 
                    rows="10" 
                    required 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog: Author</label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Abhinay">Abhinay</option>
                    <option value="Aniket">Aniket</option>
                    <option value="Saurabh">Saurabh</option>
                </select>
                {/* <button>Add Blog</button> */}
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;