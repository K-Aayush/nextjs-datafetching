import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"
import UserPosts from "./components/userPosts"

type params = {
    params: {
        userid: string
    }
}

const UserId = async ({ params: { userid } }: params) => {
    const userData: Promise<user> = getUser(userid);
    const userPostData: Promise<Post[]> = getUserPost(userid);

    const user = await userData 

    return (
        <>
            <h2>{user.name}</h2>
            <Suspense fallback={<h2>Loading...</h2>}>  
                <UserPosts promise={userPostData} />
            </Suspense> 
        </>
    )
}

export default UserId