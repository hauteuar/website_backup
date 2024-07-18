import { FaEnvelope, FaPhone, FaAddressCard, FaLocationArrow } from 'react-icons/fa';
import React from 'react';
import './ContactUs.css'
import { navigate } from 'gatsby-link'


function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}


function ContactUs() {
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        try {
           
            const response = await fetch("/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': form.getAttribute('name'),
                    ...state,
                }),
            });
    
            if (response.ok) {
                navigate(form.getAttribute('action'))
                alert('Thank you for your submission!');
                // Reset form data state if needed
                           } else {
                alert('There was a problem with your submission. Please try again.');
            }
        } catch (error) {
            alert('Error submitting the form. Please try again later.');
        }
    };

        return (
            <div id="contact-us" className="text-white p-4" style={{ fontSize: "20px" }}>
                <h2 style={{ textAlign: "center" }}>Contact Us</h2>
                <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.2rem', left: "10px" }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '1.2rem', textAlign: 'center', marginLeft: 'auto' }}>
                            <h2 style={{ textAlign: "center" }}> Our Address</h2>
                            <h4> <FaAddressCard />205-50 Lonsdale Ave, Office #2078</h4>
                            <h4><FaLocationArrow />North Vancouver, BC, V7M 2E6, Canada</h4>
                            <h4> <FaPhone /> Phone: +1 (778) 907-5100</h4>
                            <h4><FaEnvelope />   Email: info@hauteuar.com</h4>
                        </div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>

                        <br />
                      
                        <div>
                            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} style={{ margin: "right" }}>
                                <input type="hidden" name="form-name" value="contact" />
                                <p hidden>
                                    <label>
                                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                                    </label>
                                </p>
                            <div className="input-group">
                                    <p>
                                        <label>
                                            Your name:
                                            </label>
                                            <input type="text" id= "name" name="name" onChange={handleChange} required />
                                        
                                    </p>
                                </div>
                                <div className="input-group">
                                    <p>
                                        <label>
                                            Your email:</label>
                                            
                                            <input type="email" name="email" onChange={handleChange} autoComplete="email"
                                                required />
                                        
                                    </p>
                                </div>
                                <div className="input-group">
                                    <p>
                                        <label>
                                            Message:
                                        </label>    
                                            <textarea name="message" onChange={handleChange} required />
                                        
                                    </p>                        
                                    </div>
                                    <button type="submit">Send Message</button> 

                        </form>

                    </div>
                </div>
            </div>
           </div>
        );
    }


export default ContactUs;
