"use client"
import React from 'react'
import Image from "next/image";
import BackBtn from "@/assets/back.svg";
import { useRouter } from 'next/navigation';
const BackButton = ({top}) => {
    const router = useRouter()
  return (
    <button
      className={`absolute left-0 ${top} flex items-center gap-2`}
      onClick={() => router.back()}
    >
      <Image src={BackBtn} alt="" />
      Go Back
    </button>
  );
}

export default BackButton