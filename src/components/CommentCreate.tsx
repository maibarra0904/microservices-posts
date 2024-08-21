import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { Post } from './PostList';


interface Id {
    postId: string;
}

// interface Comments {
//     comments: string[]
// }

interface Comment {
    id: string;
    content: string;
}

const CommentCreate: React.FC<Id> = ({ postId }) => {

    const [content, setContent] = useState('')
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState(false)

    useEffect(() => {
        getComments()
    }, [comments])

    const handleTextComment = (e: FormEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value)
    }

    const getComments = async () => {
        //Forma de llamar a los comments directamente del servicio comments
        {/*
        const {data} = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        const bdComments = data.map((el: Comments) => el.comments)
        setComments(bdComments)
        */}
        
        //Forma de llamar a los comments a partir del query creado
        const {data} = await axios('http://localhost:4002/posts')
        const currentPost = data.filter((post: Post) => post.id === postId)
        const {comments } = currentPost[0]
        
        const bdComments = comments.map((el: Comment) => el.content)
        setComments(bdComments)
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });

        setContent('')


    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Comment</div>
            <div>
                <textarea name='comment' className='w-full' rows={5} onChange={handleTextComment} value={content}></textarea>
            </div>

            <button type='submit' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Comentar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
            </button>

            <div className='mt-4'>
                <h2 className='mb-2 text-indigo-500 hover:cursor-pointer' onClick={()=>setShowComments(!showComments)}>Comments ({comments.length})</h2>
                {
                    showComments &&
                    comments.map((comment, index) => (
                        <div key={index}>
                            <li>{comment}</li>
                        </div>
                    ))
                }
            </div>
        </form>
    )
}

export default CommentCreate