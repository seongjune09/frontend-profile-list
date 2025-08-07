
import React, { useRef, useState } from 'react';

export default function MakeCard() {
  const NameRef = useRef();
  const TeamRef = useRef();
  const JobRef = useRef();
  const PhoneRef = useRef();
  const EmailRef = useRef();

  const [ImageType, setImageType] = useState('');

  const handleSubmit = () => {
    if (NameRef.current.value.trim() === '') {
      alert('이름이 입력되지 않았습니다!');
      NameRef.current.focus();
      return;
    }

    if (TeamRef.current.value.trim() === '') {
      alert('팀이 입력되지 않았습니다!');
      TeamRef.current.focus();
      return;
    }

    if (JobRef.current.value.trim() === '') {
      alert('직책이 입력되지 않았습니다!');
      JobRef.current.focus();
      return;
    }

    if (PhoneRef.current.value.trim() === '') {
      alert('전화번호가 입력되지 않았습니다!');
      PhoneRef.current.focus();
      return;
    }

    if (EmailRef.current.value.trim() === '') {
      alert('이메일이 입력되지 않았습니다!');
      EmailRef.current.focus();
      return;
    }

    if (ImageType === '') {
      alert('사진이 선택되지 않았습니다!');
      return;
    }
  }


  return (
    <div className="MakeCard-container">
      <h1>프로필 카드 만들기</h1>

      <div className="Make-Card">
        <h2 className="information">정보를 입력해주세요.</h2>

        <div className="form-group">
          <label className="Name">Name</label>
          <input ref={NameRef} className="Name-input" placeholder=" ex) 류승찬" />
        </div>

        <div className="form-group">
          <label className="Team">Team</label>
          <input ref={TeamRef} className="Team-input" placeholder=" ex) PARADOX" />
        </div>

        <div className="form-group">
          <label className="Job">Job</label>
          <input ref={JobRef} className="Job-input" placeholder=" ex) Frontend Developer" />
        </div>

        <div className="form-group">
          <label className="Phone">Phone</label>
          <input ref={PhoneRef} className="Phone-input" placeholder=" ex) 010-8888-4444" />
        </div>

        <div className="form-group">
          <label className="Email">Email</label>
          <input ref={EmailRef} className="Email-input" placeholder=" ex) paradox@gmail.com" />
        </div>

        <div className="form-group">
          <label className="Image">Image</label>
          <label className="radio-Default">
            <input
              type="radio"
              name="imageType"
              value="default"
              checked={ImageType === 'default'}
              onChange={() => setImageType('default')}
            /> Default
          </label>
          <label className="radio-Reverse">
            <input
              type="radio"
              name="imageType"
              value="reverse"
              checked={ImageType === 'reverse'}
              onChange={() => setImageType('reverse')}
            /> Reverse
          </label>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
}
