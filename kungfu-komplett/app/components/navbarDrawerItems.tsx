import React from 'react'

const NavbarDrawerItems = () => {
    return (
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
                <label
                    htmlFor="my-drawer-4"
                    className="btn btn-ghost btn-circle ml-auto"
                >
                    X
                </label>
            </li>
            <li>
                <a href={'/training/jkd'}>Jeet Kune Do</a>
            </li>
            <li>
                <a href={''}>Shaolin Kung Fu</a>
            </li>
            <li>
                <a href={'/training/taichi'}>Tai Chi</a>
            </li>
            <li>
                <a href={'/training/kids'}>Kindertraining</a>
            </li>
            <li>
                <a href={'/training/contact'}>Traingszeiten & Kontakt</a>
            </li>
        </ul>
    )
}

export default NavbarDrawerItems
