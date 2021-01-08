import './BlogPost.css';

function BlogPost(props) {

    return (
        <div className='blogPostContainer'>
            
            <div className='blogPostTitle'><h1>{props.title}</h1></div>
            <div className='blogPostBody'><p>{props.body}</p></div>

        </div>
    )
}

export default BlogPost