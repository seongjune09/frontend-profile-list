import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />  {/*Header.jsx 파일을 불러온다*/}
      <main>
        <Outlet /> {/* 아웃렛 자리에 랜더링된다*/}
      </main>
    </div>
  );
}