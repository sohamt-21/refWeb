import React from 'react'
import '../Pages_CSS/ReviewCard.css'

const ReviewCard = () => {
    return (
        <article className="reviewcard">
            <div className="temporary_text">
                Place image here
            </div>
            <div className="reviewcard_content">
                <span className="reviewcard_title">This is a Title</span>
                <span className="reviewcard_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
                <p className="reviewcard_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
            </div>
        </article>
    )
}

export default ReviewCard