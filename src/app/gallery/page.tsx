import React from "react";
import Upload from "./upload";
import cloudinary from "cloudinary"
import View from "./view";
interface myimg{
    public_id:string
    tags:string[]
}
const Page =async () => {
    let Res=await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('public_id', 'desc')
        .with_field("tags")
        // .max_results(30)
        .execute() as {resources:myimg[]
        }

        // console.log(Res)
    return (
       <>
       <div className="flex justify-between p-10 items-center">
            <h2 className="text-3xl font-semibold tracking-tight">Gallery</h2>
            <Upload />
        </div>
        <div className="columns-4 p-4 space-y-4">
            {Res.resources.map((item,id:number)=>
                (<div key={id} >
                    <View src={item.public_id} tag={item.tags}/>
                    </div>
                )
            )}
        </div>
        </>
    )
}
export default Page;