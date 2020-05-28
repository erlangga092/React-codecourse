import React from 'react';
import './CenterHero.css';

export default function CenterHero() {
	return (
		<section className="centerHero">
			<div className="py-16 relative md:py-24">
				<div className="container">
					<div className="flex items-center justify-center text-center">
						<div className="w-full md:w-8/12 lg:w-6/12">
							<h2 className="mb-6 leading-tight text-4xl">
								Practical projects to get you ahead
							</h2>
							<p className="text-lg font-medium text-gray-600 mb-12">
								Rather than just teach theory, we focus on real code to inspire your next project. Learning shouldn't be boring, so let's have some fun.
							</p>
							<a href="" className="font-semibold px-5 py-4 relative text-base inline-block rounded text-center bg-blue-500 text-white h:text-white">
								Browse the library
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}