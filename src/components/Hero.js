import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Card from './Card'
import ImageCard from './ImageCard'
import heroImage from "../assets/images/Screenshot 2023-12-04 195032.png"


export default function Hero() {

    return (
        <div className="bg-violet-950 h-[80vh]">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="w-screen h-screen bg-gradient-to-r from-violet-950 to-violet-700"/></div>
                <div className="mx-auto py-6 sm:py-8">

                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
                    </div>
                    <div className="flex justify-between mx-auto h-60 max-w-7xl px-2 sm:px-6 lg:px-8">
                        <ImageCard imageSrc={heroImage} title="Test" className="w-50" />
                        <Card className="w-50" title="Sunset in the mountains" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
                        {/* <div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Data to enrich your online business
                        </h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}