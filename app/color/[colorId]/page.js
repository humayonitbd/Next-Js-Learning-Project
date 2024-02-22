import React from 'react'

export default function colorPage({params}) {
    const {colorId} = params;
    console.log(colorId)
  return (
    <div>
        <div>
          <h1>id:{colorId}</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis vitae doloremque amet ducimus labore. Reprehenderit quod cupiditate temporibus voluptates quasi.</p>
        </div>
    </div>
  )
}
