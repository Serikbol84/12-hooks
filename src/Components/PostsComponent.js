import React from 'react';
import useFetch from './useFetch';

const PostComponent = () => {
    const { data: posts, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');
    return (  );
}
 
export default PostComponent;