import React from 'react';
import './App.css';
import Navbar from './common/header/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import VR from './pages/vr/vr';
import Product from './pages/products/product';
import Contact from './pages/contact/contact';
import Footer from './common/footer/Footer';
import FadeIn from 'react-fade-in/lib/FadeIn';

function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				{/* <FadeIn> */}
					<Route path='/' exact component={Home} />
					<Route path='/vr' component={VR} />
					<Route path='/product' component={Product} />
					<Route path='/contact' component={Contact} />
				{/* </FadeIn> */}
			</Switch>
		</Router>
		<Footer />
		</>
	);
}

export default App;
