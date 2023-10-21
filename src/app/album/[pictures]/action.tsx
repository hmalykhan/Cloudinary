"use server"
import cloudinary from "cloudinary"
import { revalidatePath } from "next/cache"
const Action=async(publicId:string,fav:boolean)=>{
    if(fav){
    await cloudinary.v2.uploader.remove_tag("favourite",[publicId])
    }
    else{await cloudinary.v2.uploader.add_tag("favourite",[publicId])
}
await new Promise((resolve)=>{
    setTimeout(resolve),1000
})
revalidatePath("/gallery")
}
export default Action
export async function FolderCreate(folder:string,img:string){
    await cloudinary.v2.api.create_folder(folder)
    await cloudinary.v2.uploader.rename(img,`${folder}/${img}`)
}