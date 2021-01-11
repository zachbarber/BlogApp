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

    render() {

        const blogPosts = this.state.blogPosts.map(blog => {
            return <BlogPost key={blog.id} id={blog.id} title={blog.title} body={blog.body}/>
        });

        return (

            <div className='blogsContainer'>
                {blogPosts}
            </div>

        )
    }

}

export default BlogPosts