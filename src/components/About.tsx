
import { motion } from "framer-motion"
import Image from "next/image"
import law from '../../public/law.jpg'

export default function About(){
    return(
        <main className="h-screen bg-[#CED9B8] p-20">
            <h1 className="text-black font-bold text-6xl">More about the founder</h1>
            <div className="flex flex-wrap p-20 place-content-center">
                <div className="flex-2">
                    <div id="description">
                        <p className=""></p>
                    </div>
                </div>
                <div className="flex-1">
                    <div id="image" className="">
                        <Image alt="" src={law} className="h-96 object-cover rounded-3xl"/>
                    </div>
                </div>
            </div>
        </main>
    )
}