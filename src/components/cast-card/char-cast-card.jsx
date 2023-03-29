import './char-cast-card.scss';
export default function CastCard(props) {
    return (
        <>
            <div className="char-cast-box center-box">
                <h5 className="char-cast-headings">Character</h5>
                <div className="character">
                    <div className="char-cast-box">
                        <div className="profile char-img"><img src="./Your_Name/misuha 2.png" alt="" /></div>
                        <div className="char-name">
                            <p>{props.character}</p>
                        </div>
                        <div className="char-role">
                            <p>{props.role}</p>
                        </div>
                    </div>
                </div>
                <h5 className="char-cast-headings">Voice Actors</h5>
                <div className="cast center-box">
                    <div className="jap-voice">
                        <div className="profile voice-act-img"><img src="./Your_Name/Mone Kamishiraishi.jpg" alt="" /></div>
                        <div className="voice-act-name">
                            <p>{props.japvoice}</p>
                        </div>
                        <div className="char-role">
                            <p>Voice : Japanese</p>
                        </div>
                    </div>
                    <div className="eng-voice center-box">
                        <div className="profile voice-act-img"><img src="./Your_Name/Stephanie Sheh.jpg" alt="" /></div>
                        <div className="voice-act-name">
                            <p>{props.engvoice}</p>
                        </div>
                        <div className="char-role">
                            <p>Voice : English</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}