import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavbarDrawerItems from './navbarDrawerItems'

const Navbar = () => {
    return (
        <div className="navbar top-0 bg-base-100 drop-shadow-xl fixed z-40 py-5 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href={'/'}>Home</a>
                        </li>
                        <li>
                            <a href={'/training/jkd'}>Jeet Kune Do</a>
                        </li>
                        <li>
                            <a href={'/training/shaolin'}>Shaolin Kung Fu</a>
                        </li>
                        <li>
                            <a href={'/training/taichi'}>Tai Chi</a>
                        </li>
                        <li>
                            <a href={'/training/kids'}>Kindertraining</a>
                        </li>
                        <li>
                            <a href={'/training/contact'}>
                                Traingszeiten & Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href="/">
                    <Image
                        src={'/KungFu-Komplett_Red.svg'}
                        alt={'logo Kung Fu Komplett'}
                        width={200}
                        height={100}
                    />
                </Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <Image
                        src={'/instagram_icon.svg'}
                        alt={'instagram link'}
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    )
}

export default Navbar
