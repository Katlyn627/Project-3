import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// IMPORT COMPONENTS HERE!!!


import Home from './components/Home/home'
import LogInForm from './components/LogInSignUp/LogInForm';
import SignUpForm from './components/LogInSignUp/SignUpForm';
import ThoughtForm from './components/ThoughtForm/thoughtForm';


const httpLink = createHttpLink({
    uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem('id_token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


/// ADD ROUTES TO ALL COMPONENTS HERE
function App() {
    return (
        <ApolloProvider client={client}>

            <Router>
                <div>
                    {/* <Header /> */}
                    <Switch>


                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={LogInForm} />
                        <Route exact path='/signup' component={SignUpForm} />
                        <Route exact path='/thoughts' component={ThoughtForm} />
                    </Switch>
                </div>


            </Router>

        </ApolloProvider >
    );
}

export default App;