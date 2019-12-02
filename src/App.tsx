import * as React from 'react';
import './App.css';
import './components/ImageCards/ImageCards'
import ImageCards from './components/ImageCards/ImageCards';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//GraphQL end point for artsy. Art related data.
const graphQLURL = 'https://metaphysics-production.artsy.net/';

const client = new ApolloClient({
    uri: graphQLURL
});

class App extends React.Component {
    state: any = {

    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <ApolloProvider client={client}>
                <div>
                    <ImageCards />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
