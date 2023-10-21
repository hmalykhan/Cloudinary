import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Navbar = () => {
    return (
        <div className="flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    {/* <TeamSwitcher /> */}
                    {/* <MainNav className="mx-6" /> */}
                    <h2 className="text-3xl font-bold tracking-tight">Picture Gallery</h2>
                    <div className="ml-auto flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>Ak    </AvatarFallback>
                        </Avatar>
                        {/* <Search /> */}
                        {/* <UserNav /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;