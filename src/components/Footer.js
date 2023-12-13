import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerItems = [
        { name: "Home", path: "/" },
        { name: "Posts", path: "/posts" },
        { name: "Categories", path: "/categories" },
        { name: "About Us", path: "/about-us" },
    ]
    return (
        <footer className="bg-white rounded-lg dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Setayesh Abouei</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    {footerItems.map(item => (
                        <li key={item.name}>
                            <Link className="hover:underline me-4 md:me-6" to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>

    )
}

export default Footer