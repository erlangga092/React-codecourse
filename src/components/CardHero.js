import React from 'react';

export default function CardHero() {
	return (
		<section>
			<div className="py-16 relative bg-white md:py-24">
				<div className="container">
					<div className="flex justify-center">
						<div className="w-full md:w-10/12">
							<div className="flex justify-center">
								<img src="https://codecourse.com/img/testimonials/20.jpg" alt="" className="w-16 h-16 rounded-full mb-6 mr-6 opacity-75"/>
								<div>
									<p className="text-gray-600 text-xl mb-6 font-light leading-normal" style={{fontFamily: 'IBM plex sans'}}>
										<span className="text-2xl">
											My career started as a designer. Out of necessity i needed to learn how to handle the entire stack. Codecourse took me from basically no knowledge of development to being able to handle every aspect of it.
										</span>
									</p>
									<h4 className="text-lg text-gray-700 font-semibold">
										Josh Stobbs, Ontario, Canada
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}