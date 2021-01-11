import React from 'react';
import BlogPost from './BlogPost'
import './BlogPosts.css';
import * as axios from 'axios';


class BlogPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        }
    }

    async componentDidMount() {

        const apiData = await axios.get('http://localhost:35565/blogpost');

        this.setState({ blogPosts: apiData.data });
    }

    goToPostOnClick(event) {
        const postId = event.target.id;       
        
        
    }

    render() {

        const blogPosts = this.state.blogPosts.map(blog => {
<<<<<<< HEAD
            return <BlogPost key={blog.id} id={blog.id} title={blog.title} body={blog.body} goToPostOnClick={() => this.goToPostOnClick}/>
=======
            return <BlogPost key={blog.id} id={blog.id} title={blog.title} body={blog.body}/>
>>>>>>> 0c26ad564106e59d8bac6593209a41560c61a925
        });

        return (

            <div className='blogsContainer'>
                {blogPosts}
            </div>

        )
    }

}

export default BlogPosts