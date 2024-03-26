'use client'
import CardProduct from '@/components/card/CardProduct';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function page() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  
    useEffect(()=>{
      fetch(ENDPOINT)
      .then(res=>res.json())
      .then(data => setProducts(data))
    },[])
    return (
    <div className='container mx-auto h-screen grid grid-cols-4 gap-8 mt-8'>
      {products.map((product: any, index) => (
        <CardProduct 
        onClick={() => router.push(`/service/${product.id}`)}
        key={index} 
        title={product.price} 
        image={product.image} 
        price={product.price}/>
      ))}
    </div>
  );
}
