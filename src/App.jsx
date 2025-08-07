import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />  {/*Header.jsx 파일을 불러온다*/}
  
      <main>
        <Outlet /> {/* Outlet 컴포넌트는 현재 라우트의 자식 컴포넌트를 렌더링한다*/}
      </main>
    </div>
  );
}