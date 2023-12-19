import Card from './Card'
import ImageCard from './ImageCard'
import HeroImage from "../assets/images/hero-transparent.png"
export default function Hero() {

    return (
        <div className="bg-primary h-[75vh]">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div className="w-screen h-screen bg-gradient-to-r from-primary to-violet-900" /></div>
                <div className="mx-auto py-6 sm:py-8">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    </div>
                    <div className="flex justify-center flex-wrap md:flex-nowrap md:justify-between mx-auto md:h-[60vh] gap-7 mt-16 max-w-7xl px-2 sm:px-6 lg:px-8 ">
                        <Card label="Featured Articles" className="!px-6 !py-8 md:basis-5/12 rounded-2xl shadow-xl"  >
                            <div>
                                <p>Title</p>
                                <p>Embark on a journey into the ever-evolving world of technology with Tech Wind, your one-stop destination for insightful tech news, expert analyses, and captivating stories that unveil the latest innovations and transforming trends shaping our digital landscape.</p>

                            </div>
                        </Card>
                        <ImageCard imageSrc={HeroImage} className="md:basis-7/12 !shadow-xl " />
                    </div>
                </div>
            </div>
        </div>
    )
}