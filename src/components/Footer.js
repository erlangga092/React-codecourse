import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-gray-800 py-10 lg: py-24">
			<div className="container">
				<div className="flex flex-wrap md:flex-no-wrap">
					<div className="w-full lg:w-2/12 md:mr-6 mb-12 md:mb-0">
						<h4 className="text-gray-500 text-sm mb-6 uppercase">Library</h4>
						<ul className="list-none p-0 m-0">
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Latest & Featured
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Library index
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Snippets
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Browse subjects
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Roadmap
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-2/12 md:mr-6 mb-12 md:mb-0">
						<h4 className="text-gray-500 text-sm mb-6 uppercase">Your account</h4>
						<ul className="list-none p-0 m-0">
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Sign in
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-2/12 md:mr-6 mb-12 md:mb-0">
						<h4 className="text-gray-500 text-sm mb-6 uppercase">Pro membership</h4>
						<ul className="list-none p-0 m-0">
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Go pro
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Testimonials
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-2/12 md:mr-6 mb-12 md:mb-0">
						<h4 className="text-gray-500 text-sm mb-6 uppercase">Social</h4>
						<ul className="list-none p-0 m-0">
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									RSS feeds
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Twitter
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Facebook
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Youtube
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-2/12 md:mr-6 mb-12 md:mb-0">
						<h4 className="text-gray-500 text-sm mb-6 uppercase">Company</h4>
						<ul className="list-none p-0 m-0">
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Blog
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Get in touch
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Terms
								</a>
							</li>
							<li>
								<a href="" className="block text-gray-300 mb-4 text-lg font-semibold">
									Privacy policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container mt-10 md:mt-24">
				<div className="text-gray-500 text-sm">
					2020 Codecourse Ltd. All Rights Reserved. Born in London, UK.
				</div>
			</div>
		</footer>
	)
}