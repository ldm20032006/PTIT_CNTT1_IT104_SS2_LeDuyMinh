import React, { useState } from 'react'

export default function Bai1() {
  const [name] = useState("Nguyễn Văn A")
  return (
    <div>
      <h3>{name}</h3>   
    </div>
  )
}
