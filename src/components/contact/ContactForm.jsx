import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import {dsnCN} from "../../hooks/helper";

function ContactForm({className}) {

    const form = useRef();
    const [loading, setLoading] = useState();
    const [result, setResult] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setResult(false);
        setLoading(true);
        emailjs.sendForm(
            'service_q1ukn0j',
            'template_wi86n0w',
            form.current,
            'SQQyavWAI1jQ3uKJV')
            .then((result) => {
                setLoading(false);
                setResult(true);
                form.current.reset();
            }, (error) => {
                setLoading(false);
            });
    };

    setTimeout(() => setResult(false), 5000);


    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Leave Me A Message!</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input id="form_name" type="text" name="name" placeholder="Type your name"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>What's your email address?</label>
                        <input id="form_email" type="email" name="email" placeholder="Type your Email Address"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>What's up?</label>
                        <textarea id="form_message" className="form-control" name="message"
                                  placeholder="Tell me about you" required="required"
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">Send Message</button>
                    </div>
                    {loading && <div className="loading-message mt-20">Message Send ...</div>}
                    {result &&
                    <p className="success-message mt-20">Your Message has been successfully sent. I will contact you soon.</p>}
                </div>
            </form>
        </div>
    );
}

export default ContactForm;