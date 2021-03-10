import React, { useEffect, useState } from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';
import './AllLeagues.css'

const AllLeagues = () => {

    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, []);
    const flag = false;

    return (
        <div className=" text-white d-flex flex-wrap justify-content-center align-items-center">
            {
                leagues.map(league =>
                    <div className="league m-3">
                        <LeagueCard
                            key={league.idLeague}
                            leagueId={league.idLeague} 
                            flag = {flag}
                            />
                    </div>)
            }
        </div>
    );
};

export default AllLeagues;