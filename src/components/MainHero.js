import React from 'react';

export default function MainHero() {
	return (
		<section className="py-16 relative relative py-20 md:py-24 lg:py-48 bg-gray-800">
			<div className="container">
				<h3 className="text-5xl text-white leading-tight mb-1" style={{fontFamily: 'IBM plex sans'}}>
					Ready to build something awesome?
				</h3>
				<h4 className="text-gray-500 text-2xl font-light mb-10" style={{fontFamily: 'IBM plex sans'}}>
					We create practical screencasts for awesome developers.
				</h4>
				<div className="ais-instantSearch">
					<div className="ais stateResults">
						<div>
							<div className="fixed bg-blue-500 opacity-0 w-full h-full top-0 left-0 z-50 pointer-events-none">
							</div>
							<div className="relative w-full">
								<div className="bg-blue-500 inline-block rounded py-2 px-3 text-white mb-2">
									Search the library
								</div>
								<div className="relative p-3 bg-white rounded">
									<div className="ais-searchBox w-full">
										<form>
											<input type="text" placeholder="e.g. Learn Vue" className="h-12 p-4 w-full bg-white rounded text-lg"/>
										</form>
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