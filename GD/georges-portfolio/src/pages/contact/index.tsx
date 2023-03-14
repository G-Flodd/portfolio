import { NextPage } from "next";
import Head from 'next/head'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";

const contact: NextPage = () => {

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

                        <div className=' text-center p-1'>
                            <h2 className='text-5xl py-2 text-gray-600 font-medium'>
                                My Contact Information
                            </h2>
                            <h3 className='text-2xl py-2'>Designer, Creator and Crypto Enthusiast</h3>
                            <p className='text-md py-6 leading-5 text-gray-800 max-w-xl'>
                            </p>

                        </div>
                        <div className='text-8xl flex justify-center gap-5 py-4 text-gray-500'>

                            <a href="https://twitter.com/G_Flodd">
                                <AiFillTwitterCircle />
                            </a>
                            <a href="https://github.com/G-Flodd">
                                <AiFillGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/george-dodd-irwin-b6a11a242/">
                                <AiFillLinkedin />
                            </a>
                        </div>

                        <div className="py-2 lg:py-4 px-4 mx-auto max-w-screen-md">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                            <p className="mb-8 lg:mb-4 font-light text-center text-gray-500 sm:text-xl">Want to find out more about what I can offer? </p>
                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                            </form>
                        </div>

                    </section>
                </div>

            </main>
        </>
    )
}

export default contact; 