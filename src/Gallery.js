function Gallery(props) {
    return (
        <div className="gallery">
            {props.imageArray.map((item, index) => {
                return <img src={item.image} alt={item.alt_text} />;
            })
            }
        </div>
    )
}

export default Gallery;