// components/Header.tsx
import React from 'react';

type HeaderProps = {
  title: string; // กำหนดชนิดข้อมูล Props
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Header;
