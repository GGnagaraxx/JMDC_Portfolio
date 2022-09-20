import {useState} from 'react'


export default function ContactMe(){

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e){
        let newValue = {...contactInfo}
        newValue[e.target.name] = e.target.value
        setContactInfo(newValue)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(contactInfo)
        console.log(window.confirm("Send Email?"))
    }

    return(
        <section>
        <div className="container">
            <h2>Contact Me</h2>
            <div className="full center-content">
                <form className="card contact-me" id="contact-form">
                    <div className="input-container center">
                        <label htmlFor="email-input">Name</label>
                        <input 
                            type="text" 
                            className="txt-input center" 
                            id="email-input"
                            name="name"
                            placeholder="Enter your name"
                            value={contactInfo.name}
                            onChange={handleChange}/>
                    </div>
                    <div className="input-container center">
                        <label htmlFor="email-input">Email</label>
                        <input 
                            type="text" 
                            className="txt-input center" 
                            id="email-input" 
                            name="email"
                            placeholder="Enter your email"
                            value={contactInfo.email}
                            onChange={handleChange}/>
                    </div>

                    <div className="input-container center">
                        <label htmlFor="message-input">Message</label>
                        <textarea 
                            form="contact-form center" 
                            className="txt-area" 
                            id="message-input" 
                            name="message"
                            placeholder="Type your message here..."
                            value={contactInfo.message}
                            onChange={handleChange}/>
                    </div>

                    <button 
                        className="button center" 
                        onClick={handleSubmit}>
                            Submit
                        </button>
                </form>
            </div>
        </div>
    </section>
    )
}