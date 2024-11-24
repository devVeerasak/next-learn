// pages/index.tsx
import React from 'react';
import Header from './components/header';


const Home: React.FC = () => {
  let name:string='veerasak'
  return (
    <div>
      <Header data={name}/>
    </div>
  );
};

export default Home;
