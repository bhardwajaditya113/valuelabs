import React, { useState, useEffect } from 'react';
import { fetchAllPlaylistItems } from '../api';
import { Table, Pagination, Button } from 'react-bootstrap';

const PlaylistTable = () => {
  const [playlistData, setPlaylistData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllPlaylistItems();
      setPlaylistData(data);
    };
    fetchData();
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...playlistData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(playlistData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {Object.keys(currentItems[0] || {}).map((key) => (
              <th key={key} onClick={() => handleSort(key)}>
                {key} {sortConfig.key === key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default PlaylistTable;
