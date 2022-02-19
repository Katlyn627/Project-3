import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';



// import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
// import CommentForm from './components/CommentForm/Comment';
// import CommentList from './components/CommentList/List';
// import HikeForm from './components/HikeForm/Hike';
import SignUpFrom from './components/SignUpForm';
// import LogInForm from './components/LogInForm/LogIn';


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
                    {/* <Header /> */}
                    <div className="container">
                        <Route exact path="/">
                            {/* <Home /> */}
                        </Route>
                        {/* <Route exact path="/login" component={LogInForm} /> */}
                        <Route exact path="/signup" component={SignUpFrom}/>
                        <Route exact path="/profile/:profileId" component={Profile}/>
                        {/* <Route exact path="/favorites" component={Favorites}/> */}
                        {/* <Route exact path="/commentform" component={CommentForm}/>
                        <Route exact path="/commentlist" component={CommentList}/> */}
                        {/* <Route exact path="/hikeform" component={HikeForm}>
                            <HikeForm />
                        </Route> */}
                    </div>
                    {/* <Footer /> */}
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;