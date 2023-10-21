import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { folderType } from "./page"
const FolderList=({folder}:{folder:folderType})=>{
    return(
        <div>
            <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>Click on view now button to see the pictures.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link href={`/album/${folder.name}`} >
        <Button>View Album</Button>
        </Link>
      </CardFooter>
    </Card>
        </div>
    )
}
export default FolderList