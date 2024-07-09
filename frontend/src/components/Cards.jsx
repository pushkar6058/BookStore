import React from 'react'

function Cards({item}) {
  return (
    <>
    <div  className='mt-6 my-2 mx-6 p-3'>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-110 duration-200">
  <figure>
    <img 
    className='rounded'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div  className="badge  badge-outline  px-2 py-1  hover:bg-pink-600 duration-120 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards