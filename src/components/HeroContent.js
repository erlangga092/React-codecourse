import React from 'react';

export default function HeroContent() {
	return (
		<section style={{backgroundColor: 'rgb(226, 232, 240)'}}>
			<div className="py-16 relative">
				<div className="container">
					<div className="mb-12 flex justify-between items-end">
						<div>
							<h2 className="text-3xl font-semibold mb-2" style={{fontFamily: 'Merriweather sans'}}>Latest Content</h2>
							<span className="text-lg text-gray-500 mb-4 font-normal">Fresh from the library</span>
						</div>
						<a href="" class="text-blue-500 text-lg">Browse everything -></a>
					</div>
					<div className="bg-white rounded mt-6 overflow-hidden">
						<div className="border-b-2 border-gray-200">
							<div className="flex flex-wrap md:flex-no-wrap">
								<div className="p-10 md:pr-0 flex-grow">
									<a href="">
										<h3 className="text-lg font-semibold mb-4">
											Build a Multi-room Realtime chat with Livewire
										</h3>
									</a>
									<ul className="list-none flex flex-wrap m-0 p-0">
										<li className="mr-4 text-gray-500 flex items-center mb-4 font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mr-2 w-5 h-5 fill-current text-gray-500"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"></path></svg>
												1 hour 23 mins
										</li>
										<li className="mr-4 text-gray-500 flex items-center mb-4 font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mr-2 mr-2 w-5 h-5 fill-current text-gray-500"><path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm-2 2H9v1a1 1 0 1 1-2 0V6H5v4h14V6h-2v1a1 1 0 0 1-2 0V6zm4 6H5v8h14v-8z"></path></svg>
											<span>Released 10 hours ago</span>
										</li>
									</ul>
									<div className="flex flex-wrap mt-4">
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Laravel
											</div>
										</a>
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Laravel Livewire
											</div>
										</a>
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Vue Js
											</div>
										</a>
										<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-700 text-gray-100">New</div>
									</div>
								</div>
								<div className="flex justify-center w-full md:w-64">
									<div className="p-10 w-full">
										<div className="flex mb-2">
											<div className="font-semibold mr-2 capitalize">course</div>
											<div className="text-gray-500">Pro only</div>
										</div>
										<a href="" className="font-semibold px-5 py-4 relative text-base inline-block rounded text-center !block !w-full bg-blue-500 text-white h:text-white" style={{width: '100%'}}>Watch now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="border-b-2 border-gray-200">
							<div className="flex flex-wrap md:flex-no-wrap">
								<div className="p-10 md:pr-0 flex-grow">
									<a href="">
										<h3 className="text-lg font-semibold mb-4">
											Build a Multi-room Realtime chat with Livewire
										</h3>
									</a>
									<ul className="list-none flex flex-wrap m-0 p-0">
										<li className="mr-4 text-gray-500 flex items-center mb-4 font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mr-2 w-5 h-5 fill-current text-gray-500"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"></path></svg>
												1 hour 23 mins
										</li>
										<li className="mr-4 text-gray-500 flex items-center mb-4 font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mr-2 mr-2 w-5 h-5 fill-current text-gray-500"><path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm-2 2H9v1a1 1 0 1 1-2 0V6H5v4h14V6h-2v1a1 1 0 0 1-2 0V6zm4 6H5v8h14v-8z"></path></svg>
											<span>Released 10 hours ago</span>
										</li>
									</ul>
									<div className="flex flex-wrap mt-4">
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Laravel
											</div>
										</a>
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Laravel Livewire
											</div>
										</a>
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Vue Js
											</div>
										</a>
										<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-700 text-gray-100">New</div>
									</div>
								</div>
								<div className="flex justify-center w-full md:w-64">
									<div className="p-10 w-full">
										<div className="flex mb-2">
											<div className="font-semibold mr-2 capitalize">course</div>
											<div className="text-gray-500">Pro only</div>
										</div>
										<a href="" className="font-semibold px-5 py-4 relative text-base inline-block rounded text-center !block !w-full bg-blue-500 text-white h:text-white" style={{width: '100%'}}>Watch now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="border-b-2 border-gray-200">
							<div className="flex flex-wrap md:flex-no-wrap">
								<div className="p-10 md:pr-0 flex-grow">
									<a href="">
										<h3 className="text-lg font-semibold mb-4">
											Build a Multi-room Realtime chat with Livewire
										</h3>
									</a>
									<ul className="list-none flex flex-wrap m-0 p-0">
										<li className="mr-4 text-gray-500 flex items-center mb-4 font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mr-2 w-5 h-5 fill-current text-gray-500"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"></path></svg>
												1 hour 23 mins
										</li>
										<li className="mr-4 text-gray-500 flex items-center mb-4 font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="mr-2 mr-2 w-5 h-5 fill-current text-gray-500"><path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm-2 2H9v1a1 1 0 1 1-2 0V6H5v4h14V6h-2v1a1 1 0 0 1-2 0V6zm4 6H5v8h14v-8z"></path></svg>
											<span>Released 10 hours ago</span>
										</li>
									</ul>
									<div className="flex flex-wrap mt-4">
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Laravel
											</div>
										</a>
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Laravel Livewire
											</div>
										</a>
										<a href="">
											<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-300 text-gray-600">
												Vue Js
											</div>
										</a>
										<div className="inline-block text-sm font-semibold rounded px-3 py-2 mr-2 mb-2 bg-gray-700 text-gray-100">New</div>
									</div>
								</div>
								<div className="flex justify-center w-full md:w-64">
									<div className="p-10 w-full">
										<div className="flex mb-2">
											<div className="font-semibold mr-2 capitalize">course</div>
											<div className="text-gray-500">Pro only</div>
										</div>
										<a href="" className="font-semibold px-5 py-4 relative text-base inline-block rounded text-center !block bg-blue-500 text-white h:text-white" style={{width: '100%'}}>Watch now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}