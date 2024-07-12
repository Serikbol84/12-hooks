import React from 'react';
import useFetch from './useFetch';

const PostComponent = () => {
    const { data: posts, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>
            <h1>Posts</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <button onClick={refetch}>Reload Posts</button>
            <ul>
                {posts && posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}
 
export default PostComponent;