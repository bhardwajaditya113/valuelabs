import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaylistTable from './components/PlaylistTable';
import SearchBar from './components/SearchBar';
import SongDetailsModal from './components/SongDetailsModal';
import { fetchSongByTitle } from './api';

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async (title) => {
    const song = await fetchSongByTitle(title);
    setSelectedSong(song);
    setShowModal(true);
  };

  return (
    <div className="container">
      <h1>Music Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <PlaylistTable />
      <SongDetailsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        song={selectedSong}
      />
    </div>
  );
};

export default App;
