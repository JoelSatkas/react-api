import * as React from 'react';
import IPictureRecord from '../App';

class ImageCard extends React.Component<IPictureRecord> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <p>
                    Image Card
                    {this.props.}
                </p>
            </div>
        );
    }
}

export default ImageCard;
