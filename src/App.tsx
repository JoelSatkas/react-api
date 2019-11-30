import * as React from 'react';
import './App.css';
import './components/ImageCards'
import ImageCards from "./components/ImageCards";

let apiURL = `https://api.harvardartmuseums.org`;
let pictureResource = `image`;
let apiKey = `a1853f40-11f7-11ea-a4a5-8702d50a8586`;

class App extends React.Component {

    state: any = {
        pictures: []
    };

    deleteImage = (id: number) => {
        this.setState({pictures: this.state.pictures.filter( (picture: IPictureRecord) => {return picture.id !== id})});
    };

    componentDidMount = () => {
        fetch(`${apiURL}/${pictureResource}?apikey=${apiKey}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ pictures: data.records });
                console.log(data.info);
            })
            .catch(console.log)
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <ImageCards pictures={this.state.pictures} deleteImage={this.deleteImage}/>
            </div>
        );
    }
}

export default App;
