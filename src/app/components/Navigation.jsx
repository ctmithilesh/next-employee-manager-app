import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">

                <Link
                    href="/employee-dashboard"
                    className="btn btn-ghost text-xl"
                >
                    Dashboard
                </Link>
                <Link
                    href="/add-employee"
                    className="btn btn-ghost text-xl"
                >
                    Add Employee
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                width="250"
                                height="250"
                            />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link
                                href="/"
                                className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link href="/">Settings</Link></li>
                        <li><Link href="/">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation