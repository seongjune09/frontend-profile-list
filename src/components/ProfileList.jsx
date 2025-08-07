import React from 'react';

export default function MakeCard() {
  return (
    <div className="MakeCard-container">
      <h1>프로필 카드 만들기</h1>
        
      <div className="Make-Card">
        <h2 className = "information">정보를 입력해주세요.</h2>

        <div className="form-group">
          <label className = "Name">Name</label>
          <input className="Name-input" placeholder=" ex) 류승찬" />
        </div>

        <div className="form-group">
          <label className = "Team">Team</label>
          <input className="Team-input" placeholder=" ex) PARADOX" />
        </div>

        <div className="form-group">
          <label className = "Job">Job</label>
          <input className="Job-input" placeholder=" ex) Frontend Developer" />
        </div>

        <div className="form-group">
          <label className = "Phone">Phone</label>
          <input className="Phone-input" placeholder=" ex) 010-8888-4444" />
        </div>

        <div className="form-group">
          <label className = "Email">Email</label>
          <input className="Email-input" placeholder=" ex) paradox@gmail.com" />
        </div>

        <div className="form-group">
          <label className = "Image">Image</label>
          <label className="radio-Default" ><input type="radio" name="imageType" value="default"/> Default</label>
          <label className="radio-Reverse" ><input type="radio" name="imageType" value="reverse"/> Reverse</label>
        </div>

        <button className="submit-btn">등록하기</button>
            </div>
    </div>
    
  );
}
