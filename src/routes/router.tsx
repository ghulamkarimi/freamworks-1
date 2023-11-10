import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Page/ErrorPage";
import HomePage from "../Page/HomePage";
import CreatePage from "../Page/CreateBlogPage";
import UpdatePage from "../Page/UpdatePage";
import AuthorsPage from "../Page/AuthorsPage";



const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/home",
            element: <HomePage />
        },
        {
            path: "/blog/:blogId",
            element: <HomePage />
        },
        {
            path: "/showAuthor/:userId",
            element: <HomePage />
        },
        {
            path: "/create-blog",
            element: <CreatePage />
        },
        {
            path: "/update-blog",
            element: <UpdatePage />
        },
        {
            path: "/authors",
            element: <AuthorsPage />
        },
    ]
}])


export default router