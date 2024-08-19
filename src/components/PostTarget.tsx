import CommentCreate from "./CommentCreate";

interface Info {
    title: string;
    id: string
}


const PostTarget: React.FC<Info> = ({title, id}) => {

    return (
        <div className="max-w-sm m-2 bg-indigo-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Agrega tus comentarios del post.</p>

        <CommentCreate postId={id}/>

      </div>
    </div>
    )
}

export default PostTarget