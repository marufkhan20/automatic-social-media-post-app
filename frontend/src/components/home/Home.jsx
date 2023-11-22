import React from 'react'
import Hero from "./Hero";
import Plan from "./Plan";
import ReachCards from "./ReachCards";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
const Home = () => {
    return (
        <div>

            <Navbar />
            <div id='home'>
                <Hero />
            </div>
            <ReachCards />
            <div id='all-products'>
                <WhatWeDo />
            </div>
            <Testimonials />
            <div id='pricing'>
                <Plan />
            </div>
            <Footer />
        </div>
    )
}

export default Home