import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs';

const CompEditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    //Procedimiento para editar
    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}/updateBlogSql/${id}`, {title: title, content: content});
        navigate('/blogs');
    }

    useEffect (()=>{
        getBlogById();
    },[]);   
    
    const getBlogById = async () => {
        const res = await axios.get(`${URI}/oneBlogSql/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
        console.log(res.data);
    }

    return (
        <div>
            <h3>Edit Post</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input 
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div>
                    <label className='form-label'>Content</label>
                    <textarea 
                        value={content}
                        onChange={ (e) => setContent(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>
        </div>
    );
};

export default CompEditBlog;