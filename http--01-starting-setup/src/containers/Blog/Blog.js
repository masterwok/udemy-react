import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        ).then(response => {
            const posts = response.data.splice(0, 4);
            const updatedPosts = posts.map(post => ({
                ...post
                , author: 'Jonathan'
            }));

            return this.setState({
                posts: updatedPosts
            });
        });
    }

    render() {
        return (
            <div>
                <section className="Posts">

                    {this.state.posts.map(p => (
                        <Post
                            key={p.id}
                            title={p.title}
                            author={p.author}/>
                    ))}
                </section>
                <section>
                    <FullPost/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;