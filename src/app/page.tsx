"use client";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
interface upload_image{
  event:"success"
  info:{public_id:string}
}
export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <CldImage
  width="400"
  height="400"
  src="wzwiuejuerg2o5m1onat"
  sizes="100vw"
  alt="Description of my image"
  />
   </main>
  )
}