// Testimonials.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
//import './Testimonials.css'; // Create your own CSS file for styling
import './Testimonial.css';

const img_src = process.env.PUBLIC_URL + '/testimonial'
const testimonialsData = [
    {
        content: "It's exciting to devlope a virtual try on app and contribute to fashion industry and reducing returns also means reducing the carbon footprint associated with logistics and packaging, aligning with our        commitment to sustainability.We are just at our first step in our startup journey expecting us to grow steady and responsibly. ",
        name: 'Sulochana',
        title: 'CTO',
        company: 'Haute-U AR Technologies',
    },
    {
        content: "The interactive and engaging nature of virtual try-on enhances the shopping experience, increasing customer satisfaction, and fostering loyalty. Customers can experiment with different styles, leading to confident purchase decisions and a deeper connection with our brand.",
        name: 'Kabir Ahmed',
        title: 'CRO',
        company: 'Haute-U AR Technologies',
    },
    {
        content: "I am exicited on this concept on trying their MVP,it provides a seemless experience how I look in differnt dress without stepping into a store.",
        name: 'Dr Asif',
        title: 'CEO',
        company: 'Abili Tech',
    },
    {
        content: "Had a sneakpeak to their MVP, its amazing what AI can do , Way to go Haute-U AR Tech, eagarly waiting to see what magic full product will have.",
        name: 'Karthik',
        title: 'Gen AI Specialist',
        company: 'Bank of America',
    },
    // Add more testimonials here
];

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials-container" style={{alignContent: "center"}}>
            <h1 style={{textAlign: "center"}}> Testimonials </h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                
                interval={6000} // Adjust the interval as needed
            >
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-box" style={{textAlign: "center", alignContent: "center"}}>
                        <p className="testimonial-content">"{testimonial.content}"</p>
                        <div className="testimonial-info">
                             
                            <img src={`${img_src}/${testimonial.name.toLowerCase()}.png`} alt={testimonial.name} />
                            <div className="person-details">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.title} at {testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;
