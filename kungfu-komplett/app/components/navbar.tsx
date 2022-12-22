import React from 'react'
import {permanentMarker} from '../styles'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed z-40 py-5">
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
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Home</a>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Training
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <a href={'/training/jkd'}>Jeet Kune Do</a>
                                </li>
                                <li>
                                    <a>Shaolin Kung Fu</a>
                                </li>
                                <li>
                                    <a>Tai Chi</a>
                                </li>
                                <li>
                                    <a>Kindertraining</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Zeiten & Kontakt</a>
                        </li>
                        <li>
                            <a>Über uns</a>
                        </li>
                        <li>
                            <button className="btn btn-primary text-white">
                                Mitglieder Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a
                    className="btn btn-circle hover:bg-accent/0 bg-accent-content normal-case text-xl logo text-primary border-secondary/70 leading-4"
                    href={'/'}>
                    <div className={permanentMarker.className}>
                        Kung Fu Komplett
                    </div>
                </a>
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
