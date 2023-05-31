const ShowPhotos = ({listing: {photoUrls}}) => {
    return (
        <div className="show-photos-container"> 
            <div className="show-photos-main">
                <img src={photoUrls[0]} alt={photoUrls[0]}/>
            </div>
            <div className="show-photos-addl">
                <img className="top" src={photoUrls[1]} alt={photoUrls[1]}/>
                <img className="top topright" src={photoUrls[2]} alt={photoUrls[2]}/>
                <img className="bottom" src={photoUrls[3]} alt={photoUrls[3]}/>
                <img className="bottom bottomright" src={photoUrls[4]} alt={photoUrls[4]}/>
            </div>
        </div>
    );
};

export default ShowPhotos;