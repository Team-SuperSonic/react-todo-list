import React from 'react';
import moment from 'moment';

const Date = () => {
  const dayOfWeek = { 0: '일', 1: '월', 2: '화', 3: '수', 4: '목', 5: '금', 6: '토' };
  const today = moment();

  return (
    <div>
      <div
        style={{
          paddingTop: '14px',
          fontSize: '32px',
          color: '#1f1f1f',
          fontWeight: 700,
          marginBottom: '8px',
        }}
      >
        {today.format('YYYY년 MM월 DD일')}
      </div>
      <div
        style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#929292',
        }}
      >{`${dayOfWeek[today.day()]}요일`}</div>
    </div>
  );
};

export default Date;
