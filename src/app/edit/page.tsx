import TabsDemo from "./tabs"

const Edit = ({searchParams:{publicId},}:{searchParams:{publicId:string}}) => {
    console.log(publicId)
    return (
        <>
        <div className="py-4 px-5">
            <h2 className="text-3xl font-semibold tracking-tight">Edit pucture</h2>
        </div>
        <TabsDemo src={publicId}/>
        </>
    )
}
export default Edit