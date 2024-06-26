
"use client";
import React, { useEffect, useState } from 'react';


const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await res.json();
        setAlbums(data);
      } catch (error) {
        console.error('Failed to fetch albums:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
