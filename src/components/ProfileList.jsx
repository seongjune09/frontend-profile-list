import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ParadoxDefault from '../assest/default.png';
import ParadoxReverse from '../assest/reverse.webp';
import '../styles/ProfileLayout.css';

const ProfileList = () => {
  const { cards, handleDelete } = useOutletContext(); 

  return (
    <div className="profile-list">
      <h2 className="title">프로필 카드 목록</h2>

      {cards.map((card) => {
        const imageSrc = (card.name === '류승찬' || card.name === '박동현')
          ? ParadoxReverse
          : ParadoxDefault;

        return (
          <div key={card.id} className = "card">

            <div className = "card-left">
              <img src={imageSrc} alt="profile" className = "card-image" />
              <p className = "card-name">{card.name}</p>
              
            </div>

            <div className="card-body">

              <div className="card-content">
                <p><strong>Team. @PARADOX</strong></p>
                <p>{card.position}</p>
                <p>tel. <span className = "light-text">{card.tel}</span></p>
                <p>email. <span className = "light-text">{card.email}</span></p>

              </div>

              <div className="card-footer">

                <div className="button-group">
                  <button className="edit-btn">수정</button>
                  <button className="delete-btn" onClick={() => handleDelete(card.id)}>
                    삭제
                  </button>
                </div>

              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileList; 
