import React from 'react';
import ReactDOM from 'react-dom';
import ImageCards from "./ImageCards";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import graphQLURL from "../../App"

const client = new ApolloClient({
});

describe('ImageCards', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ApolloProvider client={client}>
                <ImageCards />
            </ApolloProvider>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

//More
});


