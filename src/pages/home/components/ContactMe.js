import {useRef} from 'react'
import emailjs from '@emailjs/browser';


export default function ContactMe(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        let resp = window.confirm("Send Email to giodelacruz05@gmail.com?")
        if(!resp) return;
        
        emailjs.sendForm(
            'service_ykofjwp', 
            'template_19fsk6f', 
            form.current, 
            '0f9s3DCFcPOmlPeqQ')
            .then((result) => {
                window.alert("Email Sent Successfully");
                e.target.reset()
            }, (error) => {
                window.alert("Error:", error.text);
                console.log(error.text);
            });
    };
  

    return(
        <section>
        <div className="container">
            <h2>Contact Me</h2>
            <div className="full center-content">
                <form className="card contact-me" id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="input-container center">
                        <label htmlFor="email-input">Name</label>
                        <input 
                            type="text" 
                            className="txt-input center" 
                            id="email-input"
                            name="user_name"
                            placeholder="Enter your name"/>
                    </div>
                    <div className="input-container center">
                        <label htmlFor="email-input">Email</label>
                        <input 
                            type="text" 
                            className="txt-input center" 
                            id="email-input" 
                            name="user_email"
                            placeholder="Enter your email"/>
                    </div>

                    <div className="input-container center">
                        <label htmlFor="message-input">Message</label>
                        <textarea
                            className="txt-area" 
                            id="message-input" 
                            name="message"
                            placeholder="Type your message here..."/>
                    </div>

                    <button 
                        type='submit'
                        className='button'>
                            Submit
                    </button>
                </form>
            </div>
        </div>
    </section>
    )
}