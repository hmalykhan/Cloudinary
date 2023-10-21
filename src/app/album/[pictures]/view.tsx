"use client";
import { CldImage } from "next-cloudinary";
import { AiFillHeart, AiOutlineHeart,AiFillFolderAdd } from "react-icons/ai"
import Action from "./action";
import { BiSolidEditAlt } from 'react-icons/bi'
import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
const View = ({ src, tag }: { src: string, tag: string[] }) => {
    const [fav, setfav] = useState(tag.includes("favourite"))
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
            <div className="absolute top-1 right-1" onClick={() => {
                setfav(!fav)
                Action(src, fav)
            }}>
                {fav ? <>
                    <AiFillHeart className=" w-8 h-8 text-red-500 cursor-pointer" />
                </> : <>
                    <AiOutlineHeart className="w-7 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
                </>}
            </div>
            <div className="absolute top-1 left-1">
            <Link href={`/edit?publicId=${src}`}>
                <BiSolidEditAlt className="w-7 h-8 cursor-pointer text-white hover:text-red-500 duration-300"/>
            </Link>
            </div>
        </div>
    )
}
export default View;