import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Card from './Card'
import ImageCard from './ImageCard'
import heroImage from "../assets/images/Screenshot 2023-12-04 195032.png"


export default function Hero() {

    return (
        <div className="bg-violet-950 h-[75vh] mb-28">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="w-screen h-screen bg-gradient-to-r from-violet-950 to-violet-700" /></div>
                <div className="mx-auto py-6 sm:py-8">

                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    </div>
                    <div className="flex justify-between mx-auto h-[60vh] gap-7 mt-16 max-w-7xl px-2 sm:px-6 lg:px-8">
                        <ImageCard imageSrc={heroImage} title="Test" className="basis-7/12" />
                        <Card className="basis-5/12" title="Sunset in the mountains" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
                    </div>
                </div>
            </div>
        </div>
    )
}