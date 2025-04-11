import React from 'react';
import dev from '../Assets/about1.jpg';
import cr7 from '../Assets/ronaldo.jpeg';
import messi from '../Assets/messi.jpeg';
import './About.css'
import { Link } from 'react-router-dom';
function Aboutus() {
    return (
        <div className='about-us'>
            <div className='container-about'>
                <header className='about-header'>
                    <h1>About MediTalk</h1>
                    <p>Your trusted digital healthcare partner</p>
                </header>
                
                <section className='our-mission'>
                    <h2>Our Mission</h2>
                    <p>At MediTalk, our mission is to revolutionize healthcare accessibility by providing a seamless online platform for medical prescriptions and pharmacy services. We are committed to connecting patients with licensed healthcare professionals and ensuring safe, convenient access to medications.</p>
                </section>

                <section className='our-values'>
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Patient-Centric Care:</strong> Your health and safety are our top priorities in every interaction.</li>
                        <li><strong>Medical Integrity:</strong> All prescriptions are issued by licensed professionals following thorough consultations.</li>
                        <li><strong>Privacy Protection:</strong> We maintain strict confidentiality of your medical information with HIPAA-compliant systems.</li>
                        <li><strong>Accessibility:</strong> Breaking barriers to healthcare with 24/7 online access from anywhere.</li>
                        <li><strong>Innovation:</strong> Continuously improving our platform to enhance your healthcare experience.</li>
                    </ul>
                </section>

                <section className='our-story'>
                    <h2>Our Story</h2>
                    <p>Founded in 2020 during the pandemic, MediPortal emerged from the urgent need for remote healthcare solutions. What began as a small telemedicine startup has grown into a comprehensive digital healthcare platform serving thousands of patients nationwide. Our journey continues as we expand our services and partnerships to make quality healthcare more accessible to all.</p>
                </section>

                <section className='meet-the-team'>
                    <h2>Meet Our Medical Experts</h2>
                    <div className='team-members'>
                        <div className='team-member'>
                            <img src={dev} alt='Dr. Sarah Johnson' />
                            <h3>Dr. Dev Grover</h3>
                            <p>Chief Medical Officer</p>
                            <p>Board-certified internist with 15 years of clinical experience and telemedicine specialization.</p>
                        </div>
                        <div className='team-member'>
                            <img src={messi} alt='Michael Chen' />
                            <h3>Messi yadav</h3>
                            <p>Head Pharmacist</p>
                            <p>Clinical pharmacist ensuring medication safety and optimal therapeutic outcomes for our patients.</p>
                        </div>
                        <div className='team-member'>
                            <img src={cr7} alt='Dr. Amanda Rodriguez' />
                            <h3>Dr. Ronaldo gupta</h3>
                            <p>Pediatric Specialist</p>
                            <p>Pediatrician dedicated to providing compassionate care for our youngest patients and their families.</p>
                        </div>
                    </div>
                </section>

                <section className='how-it-works'>
                    <h2>How MediTalk Works</h2>
                    <div className='steps'>
                        <div className='step'>
                            <div className='step-number'>1</div>
                            <h3>Create Your Profile</h3>
                            <p>Set up your secure medical profile in minutes</p>
                        </div>
                        <div className='step'>
                            <div className='step-number'>2</div>
                            <h3>Online Consultation</h3>
                            <p>Connect with licensed healthcare providers</p>
                        </div>
                        <div className='step'>
                            <div className='step-number'>3</div>
                            <h3>Receive E-Prescription</h3>
                            <p>Get your digital prescription instantly</p>
                        </div>
                        <div className='step'>
                            <div className='step-number'>4</div>
                            <h3>Medication Delivery</h3>
                            <p>Get medications delivered to your doorstep</p>
                        </div>
                    </div>
                </section>

                <section className='contact-us'>
                    <h2>Contact Our Support Team</h2>
                    <p>Our patient care specialists are available to assist you with any questions about our services or your prescriptions.</p>
                    <p>Email: <a href='mailto:support@mediportal.com'>support@mediportal.com</a></p>
                    <p>Phone: 1-800-MEDIPORTAL (633-4767)</p>
                    <p>24/7 Support Line for Urgent Matters: 1-800-MED-HELP</p>
                    <p>Corporate Office: 123 Healthcare Plaza, Suite 500, Boston, MA 02115</p>
                </section>
                <Link to='/'>
                    <button className='back-button'>Return Home</button>
                </Link>
            </div>
        </div>
    );
}

export default Aboutus;