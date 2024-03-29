

import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import Dropdown from './Dropdown'
import Logo from "../assets/images/logo.png";
import { PlusIcon, ListBulletIcon } from "@heroicons/react/20/solid";

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Posts', path: '/posts', dropdown: true,
    options: [{ title: <div className='flex items-center gap-2'> <ListBulletIcon width={24} />All Posts</div>, path: "posts" },
    { title: <div className='flex items-center gap-2'> <PlusIcon width={24} />Add New Post</div>, path: "posts/add" }]
  },
  { name: 'Categories', path: '/categories' },
  { name: 'About Me', path: '/about-me' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location])

  return (
    <Disclosure as="nav"
      className={classNames("w-full absolute top-0 left-1/2 transform -translate-x-1/2 px-5",
        currentPage === "/" ? "bg-transparent" : "bg-violet-950")}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl mt-6 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between border-b-2 border-violet-900 pb-6">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 aign-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="tech Wind"
                  />
                  <h1 className='ml-2 font-bold text-gray-300 text-xl'>Tech Wind</h1>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:mx-6 sm:block">
                  <div className="flex space-x-4">
                    {navItems.map((item) => (
                      !item.dropdown ?
                        <Link
                          key={item.name}
                          to={item.path}
                          className='relative text-gray-300 py-1 px-2 hover:bg-gray-700 hover:bg-opacity-20 hover:text-white rounded'
                          aria-current={currentPage === item.path ? 'page' : undefined}
                        >
                          {item.name}
                          {currentPage === item.path && <span className='absolute top-8 rounded-full right-0 left-0 w-full h-0.5 bg-white'></span>}
                        </Link>
                        :
                        <Dropdown key={item.name} className="py-1 px-2 hover:bg-gray-700 hover:bg-opacity-20 hover:text-white rounded" title={item.name} path={item.path} options={item.options} active={(currentPage === item.path)} />
                    ))}
                  </div>
                </div>
                {/* <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-none rounded">
                  Login
                </button> */}
              </div>
            </div>
          </div>
          {/* mobile */}
          <Disclosure.Panel className="px-2 sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-primary shadow-lg shadow-slate-900 w-full">
              {navItems.map((item) => (

                <Link to={item.path} key={item.name}>
                  <Disclosure.Button
                    key={item.name}
                    className={classNames(
                      currentPage === item.path ? 'bg-gray-900 text-white w-full text-left' : 'text-gray-300 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium sm:w-fit w-full text-left'
                    )}
                    aria-current={currentPage === item.path ? 'page' : undefined}
                  >
                    {!item.dropdown ? item.name
                      : <Dropdown title={item.name} path={item.path} options={item.options} />}

                  </Disclosure.Button>
                </Link>

              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;