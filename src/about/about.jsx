import React from 'react';

export function About() {
    return (
        <main>
            <div className="d-flex flex-row justify-content-around centered">
                <img src="cloggers.jpeg" alt="Cloggers" className="img-fluid img-thumbnail" style={{height: "200px"}} />
                <img src="irish_dancers.jpg" alt="Irish Dancers" className="img-fluid img-thumbnail img-opt-2" style={{height: "200px"}} />
                <img src="tap_dancers.webp" className="img-fluid img-thumbnail img-opt-1" style={{height: "200px"}} />
            </div>
            <div className="d-flex flex-column centered">
                <p>At Freedom Dance Footwear, we believe that every dancer deserves shoes that fit—not just in size, but in spirit. Too often, dancers with unusually sized feet struggle to find footwear that offers both comfort and performance. We set out to change that.</p>
                <p>Our journey began with a simple question: Why should foot size limit artistry? Dancers of all shapes, sizes, and backgrounds deserve to move with confidence, grace, and support. That’s why we design and craft specialized dance shoes made to fit where standard sizing falls short.</p>
                <p>Each pair is built with precision and care, combining innovative design with time-tested craftsmanship. Whether your feet are smaller, larger, wider, or narrower than most, our shoes are made to support your unique form—so you can focus on what truly matters: the dance.</p>
                <p>We’re more than a shoe company—we’re a community that celebrates difference and embraces individuality. Because when the right fit meets the right passion, the possibilities are endless.</p>
                <p>Freedom Dance Footwear: Made for every dancer, every step of the way.</p>
                <p><a href="https://www.instagram.com/p/DBIOkCJt6W0/">Abour Our Creator</a></p>
            </div>
        </main>
    );
}