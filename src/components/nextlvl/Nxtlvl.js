import "./nxtlvl.css"

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
                <div className="img-nxtlvl">
                    <img src="https://i.imgur.com/54BR2c0.png"></img>
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
