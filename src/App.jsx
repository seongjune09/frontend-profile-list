import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />    {/* 공통 헤더 */}
      <main>
        <Outlet />  {/* 자식 라우트 컴포넌트들이 여기 렌더링됨 */}
      </main>
    </div>
  );
}