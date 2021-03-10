import React from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import LeagueCard from '../LeagueCard/LeagueCard';

const LeagueDetails = () => {
    const { leagueId } = useParams();
    const flag = true;

    return (
        <>
        <Header badge={true} leagueId={leagueId} />
        <div className="d-flex justify-content-center m-5 text-white">
            <LeagueCard
                leagueId={leagueId}
                flag={flag}
                key = {leagueId}
            />
        </div>
        </>
    );
};

export default LeagueDetails;