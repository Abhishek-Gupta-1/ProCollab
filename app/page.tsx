import { frontend } from "@/api/apis";
import { useState } from 'react';
import  Login  from "@/components/auth/Login";
import SignUp from "@/components/auth/Signup";
import Forgotpass from "@/components/auth/Forgotpass";

export default async function Home() {

    const res = await frontend();
    console.log(res?.data)
   
  return (
    <main>
       {/* Created Login,Signup, and forgot password but havn't done the routing between pages */}
       <Login />
       {/* <SignUp /> */}
       {/* <Forgotpass /> */}

       <p>{res?.data.message}</p>
    </main>
  )
}
