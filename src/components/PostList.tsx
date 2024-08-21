import axios from 'axios'
import { useEffect, useState } from 'react'
import PostTarget from './PostTarget'


export interface Post {
    id: string;
    title: string;
    comments?: string[];
}

const PostList = () => {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {

        getPosts()

    }, [posts])
    
    const getPosts = async () => {
        //Se consulta los datos de posts directamente
        //const result = await axios('http://localhost:4000/posts')

        //Se consultan los datos del query
        const result = await axios('http://localhost:4002/posts')

        const posts = result.data

        setPosts(posts)
    }
  return (
    <>
        <div className='flex m-2'>
        {
            posts.map(post => (
                
                    <PostTarget key={post.id} title={post.title} id={post.id} />
                    //Nota.- Aquí se podría incluir como props comments={post.comments} lo
                    //que conllevaría un cambio en la programación get de los mismos
            ))      
        }
        </div>

    </>
  )
}

export default PostList