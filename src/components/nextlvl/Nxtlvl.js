import "./nxtlvl.css"
import video from '../../Videos/50.mp4'

export default function Contact() {
    return (
        <div className="nxtlvl">
            <div>
                <div className="title-nxtlvl">
                    <h1>Why do you need Virtual Tours?</h1>
                </div>
                <div className="text-nxtlvl">
                    The data indicates that Virtual Tours are becoming essential for every listing
                </div>
                <div className="vid-nxtlvl">
                    <video controls autoPlay loop muted playsinline>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="why">
                <div className="tile">
                    Listings with virtual tours receive <mark>87%</mark> more views than home listings without tours
                </div>
                <div className="tile">
                    <mark>54%</mark> of buyers skip over listings of properties that don’t include virtual tours.
                </div>
                <div className="tile">
                    <mark>63%</mark> made an offer on a property that they hadn’t seen in person.
                </div>
            </div>
        </div>

    )
}
