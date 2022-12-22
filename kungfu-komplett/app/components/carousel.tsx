import React from 'react'

type Image = {
    src: string
    alt: string
}
interface Carousel {
    images: Array<Image>
}

const Carousel = (props: Carousel) => {
    return (
        <div className="w-auto carousel rounded-box">
            {props.images.map(image => {
                return (
                    <div className="carousel-item w-screen">
                        <img className={''} src={image.src} alt={image.alt} />
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel
