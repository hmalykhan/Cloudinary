"use client"
import { myimg } from "./page"
import View from '../favourite/view'
import { useEffect, useState } from "react"
const List=({resources}:{resources:myimg[]})=>{
    const [initialState,setInitialState]=useState(resources)
    useEffect(()=>{setInitialState(resources)},[resources])
    return(
        <div className="columns-4 p-4 space-y-4">
        {initialState .map((item,id:number)=>
            (<div key={id} >
                <View src={item.public_id} tag={item.tags} fun={
                    (publicId:string)=>{setInitialState((current)=>current.filter((val)=>val.public_id!==publicId))}}/>
                </div>
            )
        )}
    </div>
    )
}
export default List