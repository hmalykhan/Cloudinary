import React from "react";
import cloudinary from "cloudinary"
import View from "../gallery/view";
import List from "./list";
export interface myimg{
    public_id:string
    tags:string[]
}
const Favourite =async () => {
    let Res=await cloudinary.v2.search
        .expression('resource_type:image AND tags=favourite')
        .sort_by('public_id', 'desc')
        .with_field("tags")
        // .max_results(30)
        .execute() as {resources:myimg[]
        }

        // console.log(Res)
    return (
       <>
       <div className="flex justify-between p-10 items-center">
            <h2 className="text-3xl font-semibold tracking-tight">Favourite</h2>
        </div>
        <List resources={Res.resources}/>

        </>
    )
}
export default Favourite;