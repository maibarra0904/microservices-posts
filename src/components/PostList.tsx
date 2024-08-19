import axios from 'axios'
import { useEffect, useState } from 'react'
import PostTarget from './PostTarget'


interface Post {
    id: string;
    title: string;
  }

const PostList = () => {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {

        getPosts()

    }, [])
    
    const getPosts = async () => {
        const result = await axios('http://localhost:4000/posts')

        const posts = result.data

        setPosts(posts)
    }
  return (
    <>
        <div className='flex m-2'>
        {
            posts.map(post => (
                
                    <PostTarget key={post.id} title={post.title} />
            ))      
        }
        </div>

    </>
  )
}

export default PostList