
function ImageCarousel(props) {
    return (
        <div className="carousel">
            {props.imageArray.map((item, index) => {
                return <img src={item.image} alt={item.alt_text} />;
            })
            }
        </div>
    )
}

export default ImageCarousel;