"use client"
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsDemo({src}:{src:string}) {
    return (
        <Tabs defaultValue="original" className="w-full py-4 px-5">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="original">Original</TabsTrigger>
                <TabsTrigger value="blur">blur</TabsTrigger>
                <TabsTrigger value="grayScale">Gray Scale</TabsTrigger>
                <TabsTrigger value="oilpaint">oilpaint</TabsTrigger>
            </TabsList>
            <TabsContent value="original">
                <div className="flex gap-7 justify-center items-center h-screen">
                <CldImage
                    width="250"
                    height="250"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                /> 
                </div>
                </TabsContent>
            <TabsContent value="blur">
           <div className="flex gap-7 justify-center items-center h-screen">
            <CldImage
                    width="250"
                    height="250"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                /> 
                <CldImage
                    width="250"
                    height="250"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                    blur={800}
                /> 
                </div>
            </TabsContent>
            <TabsContent value="grayScale">
            <div className="flex gap-7 justify-center items-center h-screen">
            <CldImage
                    width="250"
                    height="250"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                /> 
                <CldImage
                    width="250"
                    height="250"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                    grayscale={true}
                /> 
                </div>
            </TabsContent>
            <TabsContent value="oilpaint">
            <div className="flex gap-7 justify-center items-center h-screen">
            <CldImage
                    width="250"
                    height="250"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                /> 
                <CldImage
                    width="250"
                    height="250"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                    oilPaint={true}
                /> 
                </div>
            </TabsContent>
        </Tabs>
    )
}