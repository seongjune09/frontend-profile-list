// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="home-container">
        <h1 className="section-title">프로필 카드 리스트 만들기</h1>

        <ul className = "li-container">
          <li>Home : 홈화면을 볼 수 있다.</li>
          <li>Card List: 카드 리스트를 볼 수 있다.</li>
          <li>Make Card: 카드를 만들 수 있다.</li>
        </ul>
        
    </main>
  );
}