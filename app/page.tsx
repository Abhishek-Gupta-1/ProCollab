import { frontend } from "@/api/apis"
import { useState } from 'react'

export default async function Home() {

    const res = await frontend();
    console.log(res?.data)
   
  return (
    <main>
       <p>hello maderchod</p>
       <p>{res?.data.message}</p>
    </main>
  )
}
