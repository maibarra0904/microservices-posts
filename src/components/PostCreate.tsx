import { FormEvent, useState } from 'react'
import axios from 'axios'

const PostCreate = () => {

    const [title, setTitle] = useState('')

    const handleInputTitle = (e: FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        await axios.post('http://localhost:32761/posts', {title});

        setTitle('')

    }

    return (
        <>
            <div className='m-5 '>
                <div className='flex justify-start font-bold text-3xl'>Create Post</div>
                <form className='justify-start mx-5' onSubmit={handleSubmit}>
                    <div className='m-2'>Title</div>
                    <input type='text' 
                        className='border border-gray-300 rounded-md p-2 w-96' 
                        value={title}
                        onChange={handleInputTitle}
                    />
                    <div>
                        <button 
                            type='submit' 
                            className='bg-indigo-500 my-2 p-2 rounded-lg text-white'
                        >
                            Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostCreate