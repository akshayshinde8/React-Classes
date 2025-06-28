import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style.css'

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch post detail
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch post');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        // Optional: fetch author name
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch author');
        return res.json();
      })
      .then((userData) => {
        setAuthor(userData.name);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      {author && <p><strong>Author:</strong> {author}</p>}
      <p>{post.body}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default PostDetail;
