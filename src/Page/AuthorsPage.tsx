import { useSelector } from "react-redux"
import { displayAllUser } from "../reducer/UserSlice"
import { displayAllBlogs } from "../reducer/BlogSlice"
import { IBlog, IUser } from "../interface"
import { NavLink } from "react-router-dom"
 



const AuthorsPage = () => {
  
    const users = useSelector(displayAllUser)
    const blogs = useSelector(displayAllBlogs)

    const getNumberOfBlogs = (user: IUser) => {

        return blogs.filter((blog: IBlog) => blog.userId === user._id).length
    }
    return (

        <div className="flex gap-4 flex-col w-full justify-center items-center">
            {
                users.map((user) => (
                    <div key={user._id}
                        className="flex bg-slate-500 gap-4 w-3/4 rounded-xl px-4 py-2 border-x-8 border-yellow-500 hover:border-green-500 "
                    >

                        <div>
                            <img className="w-16 h-16" src={user.photo} alt="" />
                        </div>

                        <div className="flex flex-col gap-4">

                            <p className="text-xl text-orange-500">{user.firstName} {user.lastName}</p>

                            <p className="text-xl text-black">{user.email}</p>

                              <NavLink to={`/showAuthor/${user._id}`}>
                            <button className="text-xl flex justify-center gap-1 w-fit px-4 py-1 rounded-xl text-black bg-green-500">
                                Number of Blog :
                                <span className="text-red-500">{getNumberOfBlogs(user)}</span>
                            </button>
                            </NavLink>


                            <div>
                                <button className="px-3 py-1 bg-green-500 mx-2 rounded-xl">Edit</button>

                                <button className="px-3 py-1 bg-red-500 mx-2 rounded-xl">Delete</button>
                            </div>

                        </div>
                    </div>


                ))
            }

        </div>


    )
}

export default AuthorsPage
