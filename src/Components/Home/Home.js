import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AllLeagues from '../AllLeagues/AllLeagues';
import Header from '../Header/Header';
import LeagueDetails from '../LeagueDetails/LeagueDetails';
import NotFound from '../NotFound/NotFound';

const Home = () => {
    return (
        <div>

            <Router>
                <Switch>
                <Route exact path="/">
                        <Header badge={false} />
                        <AllLeagues />
                    </Route>
                    <Route path="/home">
                        <Header badge={false} />
                        <AllLeagues />
                    </Route>
                    
                    <Route path="/:leagueId">
                        
                        <LeagueDetails />
                    </Route>
                    <Route path="*">
                        <Header badge={false} />
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;