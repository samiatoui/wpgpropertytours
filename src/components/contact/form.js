import "./form.css"
export default function Form() {
    return (
        <div className="formMain">
            <form action="https://submit-form.com/MJKDusTX">
                <div className="formSec">
                    <br></br>
                    <input type="text" id="name" name="name" placeholder="Name*" required="" />
                </div>

                <div className="formSec">
                    <br></br>
                    <input type="email" id="email" name="email" placeholder="Email*" required="" />
                </div>

                <div className="formSec">
                    <br></br>
                    <input type="address" id="address" name="address" placeholder="Property Address" />
                </div>

                <div className="formSec">
                    <br></br>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message*"
                        required=""
                    ></textarea>
                </div>
                <div className="buttonhold">
                    <button type="submit">Send.</button>
                </div>
            </form>
        </div>
    );
}