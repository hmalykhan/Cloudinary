import cloudinary from 'cloudinary'
import FolderList from './folderList'
export interface folderType {
    name: string
    path: string
}
const Page = async () => {
    const { folders } = (await cloudinary.v2.api.root_folders()) as { folders: folderType[] }
    console.log(folders)
    return (
        <div>
            <div className="p-10">
                <h2 className="text-3xl font-semibold tracking-tight">Picture Albums</h2>
            </div>
            <div className='px-5 py-4 grid grid-cols-3 gap-4'>
                {/* folders */}
                {folders.map((item,id)=>{
                    return(
                        <div key={id}>
                            <FolderList folder={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Page