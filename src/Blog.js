import React from 'react';

function Blog(props) {
     let post = props.posts.map(post => {
         return (
             <div>
                 <div>
                     <h2>{post.title}</h2>
                </div>
                <div>
                     <p>{post.body}</p>
                </div>
             </div>
         )
    })
    return (
        <div>
            <h1>This is my Blog</h1>
            {post}
        </div>
    );
}

export default Blog;