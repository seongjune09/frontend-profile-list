import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <header className="header">
        <h1 className="main-title">Profile Card List</h1>
      </header>      

      <nav className="nav-links">
        <div onClick={() => navigate('/home')}>Home</div>
        <div onClick={() => navigate('/card-list')}>Card List</div>
        <div onClick={() => navigate('/make-card')}>Make Card</div>
      </nav>

      <footer className="footer-container">
        <h1 className = "footer-title">프로필 카드 리스트 만들기</h1>
        <li>Home : 홈화면을 볼 수 있다.</li>
        <li>Card List : 카드 리스트를 볼 수 있다.</li>
        <li>Make Card : 카드를 만들 수 있다.</li>
      </footer>
    </div>
  );
}

export default Header;