import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import CommentForm from './components/CommentForm/Comment';
import CommentList from './components/CommentList/List';
import HikeForm from './components/HikeForm/Hike';
import SignUpFrom from './components/SignUpForm/SignUp';
import LogInForm from './components/LogInForm/LogIn';


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

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Header />
                    <div className="container">
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                        <Route exact path="/profiles/:profileId">
                            <Profile />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/favorites">
                            <Favorites />
                        </Route>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;