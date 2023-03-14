import { NextPage } from "next";
import Head from 'next/head'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import flodd from '../public/avatar.jpeg';

const skills: NextPage = () => {

    return (
        <>
            <Head>
                <title>George's Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='bg-blue-300 px-10'>
                <div className='min-h-screen'>
                    <section>
                        <nav className='py-10 mb-20 flex justify-between'>
                            <h1 className='text-2xl font-'>   DoddDigitals</h1>
                            <ul className='flex items-center'>
                                <li>
                                </li>
                                <li> <a className='bg-gray-800 text-white px-3 py-2 rounded-lg ml-2' href="/"> Home </a> </li>
                                <li> <a className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' href="/skills"> Skills </a> </li>
                                <li> <a className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' href="/projects"> Projects </a> </li>
                                <li> <a className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' href="/contact"> Contact </a> </li>
                            </ul>
                        </nav>

                        <div className=' text-center p-10'>
                            <h2 className='text-5xl py-2 text-gray-600 font-medium'>
                                My Skills
                            </h2>
                            <h3 className='text-2xl py-2'>Designer, Creator and Crypto Enthusiast</h3>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h3 className="text-center text-3xl py-2"> Software </h3>
                            <p className="text-center text-md py-2 leading-8 text-gray-900">
                                • AutoCAD
                                • Site 3D
                                • Adobe Illustrator
                                • Adobe Photoshop
                                • AutoCAD
                                • Site 3D
                                • Adobe Illustrator
                                • Adobe Photoshop
                            </p>

                            <h3 className="text-center text-3xl py-2"> Soft Skills</h3>
                            <p className="text-center text-md py-2 leading-8 text-gray-900">
                                • Organisational and time management
                                • Attention to detail
                                • Problem solving
                                • Communication and collaboration
                                • Work well in fast paced environments
                            </p>
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}

export default skills; 