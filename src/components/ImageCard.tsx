import * as React from 'react';

const ImageCard = (props: any) => {

    return (
        <div>
            <h1>Image List</h1>
            {props.pictures.map((picture: IPictureRecord) => (
                <div>
                    <div>
                        <h5>{picture.copyright}</h5>
                        <img className="images-class" src={picture.baseimageurl} />
                        <p>{picture.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageCard;
