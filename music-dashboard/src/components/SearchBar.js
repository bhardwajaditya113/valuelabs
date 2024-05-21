import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    onSearch(title);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Get Song</button>
    </div>
  );
};

export default SearchBar;
