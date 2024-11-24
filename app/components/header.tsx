// components/Header.tsx
import React from 'react';
import { text } from 'stream/consumers';

type HeaderProps = {
  data: string; // กำหนดชนิดข้อมูล Props
};

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <div>
         <h1 style={{textAlign: 'center'}}>{data}</h1>
         <hr />
    </div>
 );
};

export default Header;
