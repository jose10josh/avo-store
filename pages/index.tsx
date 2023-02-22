import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('api/avo')
      .then(res => res.json())
      .then(({data}) => {setProductList(data)});
  }, [])



  return (
    <div>
      <>
        <Navbar />
        {productList.map((product) => {
          return <p key={product.id}>{product.name}</p>
        })}
      </>
    </div>
  );
};

export default Home;