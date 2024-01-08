import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ title, path, options, active, className }) {
    return (
        <Menu as="div" className="relative inline-block text-left sm:w-fit w-full">
            <div>
                <Link to={path}>
                    <Menu.Button className={classNames("flex items-end relative text-gray-300 w-full", className)}>
                        {title}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </Link>
                {active && <span className='absolute top-8 rounded-full right-0 left-0 w-full h-0.5 bg-white'></span>}
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="sm:absolute left-0 z-10 mt-2 w-full sm:w-44 origin-top-right rounded-md sm:bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map(option => (
                            <Menu.Item key={option.title}>
                                <Link
                                    to={option.path}
                                    className={'sm:text-gray-700 text-white block px-4 py-2 text-sm w-full'}>
                                    {option.title}
                                </Link>
                            </Menu.Item>
                        ))}

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
