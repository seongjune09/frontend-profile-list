
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import initialData from './data/cardData';

export default function App() {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('cards');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleDelete = (id) => {
    setCards(prev => prev.filter(card => card.id !== id));
  };

  return (
    <div>
      <Header />
      <main>
        <Outlet context={{ cards, handleDelete }} />
      </main>
    </div>
  );
}
