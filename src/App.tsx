import * as React from 'react';
import './App.css';
import './components/ImageCard'
import ImageCard from "./components/ImageCard";

let apiURL = `https://api.harvardartmuseums.org`;
let pictureResource = `image`;
let apiKey = `a1853f40-11f7-11ea-a4a5-8702d50a8586`;

interface IPictureRecord {
    iiifbaseuri: string,
    width: number,
    caption: string,
    fileid: number,
    copyright: string,
    date: string,
    imageid: number,
    renditionnumber: string,
    id: number,
    lastupdate: string,
    accesslevel: number,
    height: number,
    baseimageurl: string,
    idsid: number
}

class App extends React.Component {

    state = {
        pictures: IPictureRecord[] = []
    };

    componentDidMount = () => {
        fetch(`${apiURL}/${pictureResource}?apikey=${apiKey}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ pictures: data.records })
            })
            .catch(console.log)
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                Hello
                <ImageCard pictures={this.state.pictures} />
            </div>
        );
    }
}

export default App;
