import Link from 'next/link';
import React from 'react'

export default function color() {
 const colors = [
    {
      id:1,
      name:"button-1",
      number:'bg-red-300'
    },
    {
      id:2,
      name:"button-2",
      number:'bg-red-400'
    },
    {
      id:3,
      name:"button-3",
      number:'bg-red-500'
    },
    {
      id:4,
      name:"button-4",
      number:'bg-red-600'
    },
  ]
  return (
    <main>
      <div className="mt-10">
        <div className="mt-10">
          {
            colors?.map(color => <><Link href={`color/${color.id}`}><button className={`btn ${color.number} mr-5 py-1 px-3 text-white rounded`}>{color.name}</button></Link></>)
          }
        
        </div>
      </div>
    </main>
  );
}
