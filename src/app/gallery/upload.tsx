"use client"
import { useState } from "react"
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface upload_image {
    event: "success"
    info: { public_id: string }
}
const Upload = () => {
    const [imgid, setimgid] = useState("")
    const router=useRouter()
    return (
        <div>
            <Button asChild className="cursor-pointer">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                </svg>
                    <CldUploadButton uploadPreset="hakoona" onUpload={(result) => {
                    let res = result as upload_image
                    setTimeout(()=>{router.refresh()},1000)
                    console.log(result)
                    //  setimgid(res.info.public_id) 
                    
                        }
                    } /></div>
            </Button>
        </div>
    )
}
export default Upload;