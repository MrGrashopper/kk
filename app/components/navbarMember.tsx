'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavbarMember = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('cookie-kk-member')
        window.location.href = '/member'
    }

    const isMobile = windowWidth <= 768
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
                            <a href={'/member'}>Home</a>
                        </li>
                        <li>
                            <a href={'/member/black'}>schwarz</a>
                        </li>
                        <li>
                            <a>grün JKD - nicht freigeschaltet</a>
                        </li>
                        <li>
                            <a>blau JKD</a>
                        </li>
                        <li>
                            <a>gelb JKD</a>
                        </li>
                        <li>
                            <a>grün Shaolin</a>
                        </li>
                        <li>
                            <a>blau Shaolin</a>
                        </li>
                        <li>
                            <a>gelb Shaolin</a>
                        </li>
                    </ul>
                </div>
            </div>
            <a className="navbar-center" href="/">
                <img
                    className="w-36 h-12 md:w-48 md:h-22"
                    src="/KungFu-Komplett_Red.svg"
                    alt="logo Kung Fu Komplett"
                />
            </a>
            <div className="navbar-end">
                <button
                    className="btn btn-accent border-white/10"
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default NavbarMember
