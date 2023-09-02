import React, { useState, useEffect } from 'react';

const Post3 = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 3-Click To See My Comments [200-300]',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
    },
  ]);
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [searchedCommentId, setSearchedCommentId] = useState('');
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_start=200&_end=300')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    setShowComments(true);
  };

  const handleHideComments = () => {
    setShowComments(false);
  };

  const handleSearchChange = (event) => {
    setSearchedCommentId(event.target.value);
  };

  const filteredComments = comments
    .filter((comment) => comment.id.toString().includes(searchedCommentId))
    .slice(0, 100);

    return (
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 md:w-1/2 sm:w-full p-4 my-8 overflow-y-auto">
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="mb-2">
                  <button
                    onClick={() => handlePostClick(post.id)}
                    className="text-white hover:bg-blue-600 hover:text-white rounded-full border p-5 cursor-pointer flex items-center"
                  >
                    <img
                      src={post.image}
                      alt="Post Thumbnail"
                      className="w-10 h-10 mr-2 rounded-full"
                    />
                    {post.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 md:w-1/2 sm:w-full p-4 border">
            <div>
              <h2 className="text-lg text-white font-semibold my-4">Comments for Selected Post 3</h2>
              {showComments && (
                <button onClick={handleHideComments} className="mb-2 border p-2 rounded-2xl hover:bg-blue-600 hover:text-white text-white cursor-pointer">
                  Hide Comments
                </button>
              )}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search by Comment ID"
                  value={searchedCommentId}
                  onChange={handleSearchChange}
                  className="px-2 py-1 border border-gray-300 rounded-full w-full"
                />
              </div>
              {showComments && (
                <div className="comment-section text-white overflow-y-auto max-h-[400px]">
                <ul>
                    {filteredComments.length === 0 ? (
                    <li className="mb-2 border hover:bg-blue-600 hover:text-white p-5">Not Found</li>
                    ) : (
                    filteredComments.map((comment) => (
                        <li key={comment.id} className="mb-2 border p-5 hover:bg-blue-600 hover:text-white">
                        <strong>Comment ID: {comment.id}</strong>
                        <p>{comment.body}</p>
                        </li>
                    ))
                    )}
                </ul>
                </div>
                )}
            </div>
          </div>
        </div>
      );
};

export default Post3;
