import "./contact.css"
import Form from "./form"

export default function Contact() {
    return (
        <div className="contact">
            <hr></hr>
            <div className="title-contact">

                <h1>Book your virtual tour.</h1>
            </div>
            <div className="text-contact">
                Please use the form below for all questions and booking inquiries.
            </div>
            <div className="form-c">
                <Form/>
            </div>
        </div>
    )
}
