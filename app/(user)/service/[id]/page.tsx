import CardProductDetail from '@/components/card/CardProductDetail';
import React from 'react'

type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any;
}

const ENDPOINT = "https://fakestoreapi.com/products/";

export const getData = async (id: number) => {

  // const res = await fetch(`${ENDPOINT}${id}`, {cache:"no-store"}); // no cache
  // const res = await fetch(`${ENDPOINT}${id}`, {next: {revalidate: 3600}}); // base on time for cache
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
}

const placeholder = "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1";

export default async function Detail(props:any) {
    // console.log(props)
  const data = await getData(props.params.id);
  // console.log(data)
  return (
      <div className='h-screen grid place-content-center'>
        <CardProductDetail title={data?.title || "No Title"} description={data?.description || "No Description"} image={data?.image || placeholder} />
      </div>
  )
}
