import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

const Images = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ image: '', text: '' });
  const [count, setCount] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

 
  useEffect(() => {
    Axios.get('http://localhost:5000/images')
      .then(response => {
        setPosts(response.data);
        setFilteredPosts(response.data); 
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

 
  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post('http://localhost:5000/images', newPost)
      .then(response => {
        setPosts([...posts, response.data]);
        
        setNewPost({ image: '', text: '' });
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
      });
  };

  const handleImageClick = (id) => {
    setCount(prevCount => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1
    }));
  };

  
  const bubbleSortDescending = (arr) => {
    const sortedArray = [...arr];
    const n = sortedArray.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if ((count[sortedArray[j].id] || 0) < (count[sortedArray[j + 1].id] || 0)) {
          
          [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
        }
      }
    }
    return sortedArray;
  };

 
  const handleFilterAndSort = () => {
   
    const filtered = posts.filter(post =>
      post.text.includes(searchQuery) || post.image.includes(searchQuery)
    );
    
   
    const sortedFilteredPosts = bubbleSortDescending(filtered);
    setFilteredPosts(sortedFilteredPosts);
  };

  return (
    <div className="container">
      <h1>Image Posts</h1>

      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={newPost.image}
          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Text description"
          value={newPost.text}
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          required
        />
        <button type="submit">Add Post</button>
      </form>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleFilterAndSort}>Search and Sort</button>
      </div>

      <div className="post-list">
        {filteredPosts.map((post) => (
          <div className="post-item" key={post.id}>
            <img
              src={post.image}
              alt="Post"
              onClick={() => handleImageClick(post.id)}
            />
            <p>{post.text}</p>
            <p>Click count: {count[post.id] || 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
