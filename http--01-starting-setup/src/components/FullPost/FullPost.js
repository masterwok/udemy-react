import React, {Component} from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {

    state = {
        post: null
    };

    componentDidUpdate() {
        if (this.props.id === null) {
            return;
        }

        // Prevent fetching the same data multiple times.
        if (this.state.post
            && this.state.post.id === this.props.id) {
            return;
        }

        axios.get(
            `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
        ).then(response => {
            console.log(response);

            this.setState({
                post: response.data
            });
        });
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }

        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;