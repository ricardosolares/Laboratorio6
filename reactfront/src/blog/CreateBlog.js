import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/')
    }   

    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store} style={{ maxWidth: '500px', margin: '0 auto' }}>
    <div className='mb-3'>
        <label className='form-label'>Titulo</label>
        <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className='form-control'
        />
    </div>
    <div className='mb-3'>
        <label className='form-label'>Contenido</label>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className='form-control'
            style={{ width: '100%', height: '100px' }} // Ajusta el tamaño del textarea
        />
    </div>
    <button type='submit' className='btn btn-primary'>Guardar</button>
	<button type='button' className='btn btn-secondary' onClick={() => window.history.back()} style={{ marginLeft: '10px' }}>
    Atrás
    </button>
</form>

        </div>
    )
}

export default CompCreateBlog