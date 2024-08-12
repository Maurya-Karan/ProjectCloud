"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { bgpattern } from "@/assets";
import Sidebar from "../components/Sidebar";
import { io } from "socket.io-client";
import { useEffect } from "react";
export default function Home() {

  const socket = io("http://localhost:4000");
  useEffect(()=>{
    socket.on("connect", ()=>{
      console.log("connected", socket.id);
    })
    socket.on("welcome",(s)=>{console.log(s)});
  },[]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-pattern  bg-cover justify-between z-0 ">

      <div className="fixed text-white z-50">
      <Navbar/>
      </div>
      {/* <div className=" fixed left-0  rounded-lg shadow-lg">

      <Sidebar/>
      
      </div> */}
      
    </main>
  );
}
