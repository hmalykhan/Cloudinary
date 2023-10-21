"use client"
import { Button } from "@/components/ui/button"
import { AiFillFolderAdd } from "react-icons/ai"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { FolderCreate } from "./action"
const Dialogg = ({img}:{img:string}) => {
    const [album, setAlbum] = useState("")
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="m-0 p-0">
                        <AiFillFolderAdd className="w-7 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add to album</DialogTitle>
                        <DialogDescription>
                            Enter the name of the album for the picture you want to save in.
                            Click add to the album when you are done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="album-name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="album-name"
                                value={album}
                                onChange={(e) => { setAlbum(e.target.value) }}
                                className="col-span-3"
                                placeholder="Album name here..."
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={async() => {
                            setOpen(false)
                            await FolderCreate(album,img)
                        }} type="submit">Add to album</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default Dialogg