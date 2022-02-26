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



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// IMPORT COMPONENTS HERE!!!
import Home from './components/Home/Home'
import LogInForm from './components/LogInSignUp/LogInForm';
import SignUpForm from './components/LogInSignUp/SignUpForm';
import ThoughtForm from './components/ThoughtForm/thoughtForm';
import Dashboard from './components/Dashboard/dashboard';
import Profile from './components/Profile/Profile'
//
import Header from "./components/Header/Header"
// import Search from './components/SearchBar/SearchBar';

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
                    <Header />
                    <Switch>


                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={LogInForm} />
                        <Route exact path='/signup' component={SignUpForm} />
                        <Route exact path='/thoughts' component={ThoughtForm} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/dashboard' component={Dashboard} />
                    </Switch>
                </div>


            </Router>

        </ApolloProvider >
    );
}

export default App;