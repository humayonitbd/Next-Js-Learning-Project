import React from 'react'

export default function colorPage({params}) {
    const {colorId} = params;
    console.log(colorId)
  return (
    <div>
        <div><h1>id:{colorId}</h1></div>
        </div>
  )
}
