import React from 'react';
import AppHeader from './components/AppHeader';
import MainHero from './components/MainHero';
import CenterHero from './components/CenterHero';
import CardHero from './components/CardHero';
import HeroContent from './components/HeroContent';
import PlansContent from './components/PlansContent';
import FeatureContent from './components/FeatureContent';
import Footer from './components/Footer';
import './App.css';

export default function App() {
	return (
		<div className="layout">
			<div>
				<div className="h-full">
					<AppHeader />
					<MainHero />
					<CenterHero />
					<CardHero />
					<HeroContent />
					<PlansContent />
					<FeatureContent />
					<CardHero />
					<Footer />
				</div>
			</div>
		</div>
	)
}