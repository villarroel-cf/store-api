import { useState, useEffect } from 'react';
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

import ProductDetail from '../../Components/ProductDetail';

const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.error(err))
  }, []);
  return (
    <Layout>
      HOME
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card {...item} key={item.id} />
          ))
        }
      </div>
      <ProductDetail></ProductDetail>
    </Layout>
  )
}

export default Home
