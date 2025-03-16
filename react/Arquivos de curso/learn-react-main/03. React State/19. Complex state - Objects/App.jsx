import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? starFilled : starEmpty
    let buttonLabel = contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'
    let buttonPressed = contact.isFavorite
    let buttonImgAlt = contact.isFavorite ? 'filled star icon' :'empty star icon'


    function toggleFavorite() {
       
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={buttonPressed}
                        aria-label={buttonLabel}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={buttonImgAlt}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.name} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
