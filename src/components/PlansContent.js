import React from 'react';

export default function PlansContent() {
	return (
		<section className="plansContent bg-white">
			<div className="py-16 relative md:py-24">
				<div className="container">
					<div className="flex items-center justify-center text-center">
						<div className="w-full md:w-8/12 lg:w-6/12">
							<h2 className="mb-6 leading-tight text-4xl">
								Unlimited access to everything with pro membership.
							</h2>
							<p className="text-lg font-medium text-gray-600 mb-12">
								For the price of a few coffees a month you get access to our 
								<strong>
									entire library of content
								</strong>
								, and more
							</p>
							<a href="" className="font-semibold px-5 py-4 relative text-base inline-block rounded text-center bg-blue-500 text-white h:text-white">
								See plans
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}