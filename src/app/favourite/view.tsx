"use client";
import { CldImage } from "next-cloudinary";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import Action from "../gallery/action";
import { useState } from "react";
import { myimg } from "./page";
const View = ({ src,tag,fun }: { src: string,tag:string[],fun:any }) => {
    const [fav,setfav]=useState(tag.includes("favourite"))
    return (
        <div className="relative">
            <CldImage
                className="rounded-sm"
                width="400"
                height="400"
                src={src}
                sizes="100vw"
                alt="Description of my image"
            />
            <div className="absolute top-1 right-1" onClick={()=>{
                fun(src)
                setfav(!fav)
                Action(src,fav)}}>
                {fav?<>
                <AiFillHeart className=" w-8 h-8 text-red-500 cursor-pointer"/>
                </>:<>
                <AiOutlineHeart className="w-7 h-8 cursor-pointer text-white hover:text-red-500 duration-300"/>
                </>}
            </div>
        </div>
    )
}
export default View;