// return (
//     <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
//         <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
//             <h1 className="m-0" style={{ fontSize: '3rem' }}>
//                 Sike Hike
//             </h1>
//             <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
//                 Meet your new hiking friends.

//                 {/* adding fixing */}
//             </p>
//         </div>
//     </header>
// );


import React, { useState, useEffect } from 'react';
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
import Dashboard from './components/Dashboard/Dashboard';


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
    const [ parkData, setParkData ] = useState();
    useEffect(() => {
        console.log("test")
        getHike()
    }, [])
    //api call function
    function getHike() {
        fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=94HrMZasixLsS8y0uUuB6DpcI8Dc6abmNlhnZXBR')
            .then(response => response.json())
            .then(results => {
                console.log(results)
                setParkData(results);
            })
    }

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
                        <Route exact path='/dashboard' component={Dashboard} />
                    </Switch>
                </div>


            </Router>

        </ApolloProvider >
    );
}

export default App;