import React from 'react';
import './AppHeader.css';

export default function AppHeader() {
	return (
		<header className="header w-full bg-white h-82px flex items-center justify-between">
			<div className="container flex items-center justify-between z-50">
				<div className="h-full flex items-center">
					<div className="flex items-center h-full mr-6">
						<a href="" className="flex items-center">
							<img src="https://codecourse.com/_nuxt/8d3e53d18e4055d6cd080cc72c3a2be5.svg" alt="" className="h-10 w-10"/>
						</a>
					</div>
					<nav className="items-center hidden lg:flex relative top-auto left-auto bg-white w-auto">
						<ul className="list-none p-0 m-0 flex items-center w-auto">
							<li className="mr-4 relative w-auto">
								<a href="" className="p-3 pr-0 text-lg font-bold text-gray-500 hover:text-gray-700">
									Library
								</a>
							</li>
							<li className="mr-4 relative w-auto">
								<a href="" className="p-3 pr-0 text-lg font-bold text-gray-500 hover:text-gray-700">
									Subjects
								</a>
							</li>
							<li className="mr-4 relative w-auto">
								<a href="" className="p-3 pr-0 text-lg font-bold text-gray-500 hover:text-gray-700">
									Path
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="flex items-center h-full">
					<div className="h-full hidden lg:flex items-center justify-center mr-6">
						<a href="" className="p-3 pr-0 text-lg font-bold text-gray-500 hover:text-gray-700">
							Sign in
						</a>
					</div>
					<div className="h-full hidden lg:flex items-center justify-center">
						<a href="" className="font-semibold px-5 py-4 relative text-base inline-block rounded text-center text-lg font-bold !py-3 bg-blue-500 text-white h:text-white">
							Join pro
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}