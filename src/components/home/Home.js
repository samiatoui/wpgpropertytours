import "./home.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function About() {


    return (

        <div className="about">
            <div className="text">
                <img src="https://i.imgur.com/vqDQYja.png"></img>
                <p>Providing virtual tour services for all types of properties.</p>

                    <a href="https://https://www.instagram.com/wpgpropertytours/" className="contactme">
                        Instagram
                    </a>
            </div>
            <div className="imghome">
                <img src="https://i.imgur.com/F7vIDAY.png"></img>
            </div>
        </div>
    )
}


