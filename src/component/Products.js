import React from 'react'
import { useState } from 'react';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

export default function Products() {
   const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>)
    function handleClickIncrease()
    {
        setCount(count+1)
    }
    function handleClickDecrease()
    {
        if(count>0)
        setCount(count-1)
    }
    const [count,setCount] = useState(0);
  return (
   // <button type="button" class="btn btn-primary">Primary</button>
    <>
    <h1>{count}</h1>
    <button type="button" class="btn btn-primary"  onClick={handleClickIncrease}> Increase </button>
    <button type="button" class="btn btn-primary" onClick={handleClickDecrease}> Decrease </button>
      <ul>{listItems}</ul></>
  );
}
