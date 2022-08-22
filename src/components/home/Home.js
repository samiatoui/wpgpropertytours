import "./home.css"

export default function About() {
    return (

        <div className="about">
            <div className="text">
            <img src="https://i.imgur.com/vqDQYja.png"></img>
                <p>Providing virtual tour services for all types of properties.</p>

                <button className="contactme" onClick='window.location="#contact"'>
                    Get in touch.
                </button>
            </div>
            <div className="imghome">
                <img src="https://i.imgur.com/F7vIDAY.png"></img>
            </div>
        </div>
    )
}


