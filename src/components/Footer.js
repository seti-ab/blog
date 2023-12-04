import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const footerItems = [
    {
        id: "home",
        title: "Home",
        path: "/",

    },
    {
        id: "posts",
        title: "Posts",
        path: "posts",
    },
    {
        id: "users",
        title: "Users",
        path: "users",
    }
]
export default function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 p-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal">
                &copy; 2023 Material Tailwind
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                {footerItems.map(item => (
                    <li key={item.id}>
                        <Link to={item.path}
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}