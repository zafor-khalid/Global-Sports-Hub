import React, { useEffect, useState } from 'react';
import './Header.css'
const Header = ({ badge, leagueId }) => {
    const [leagueBadge, setLeagueBadge] = useState();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueBadge(data.leagues[0].strLogo))
    }, [leagueId])
    const style = {
        maxHeight: '60%',
        minWidth: '50%'
    }

    return (
        <>
            {
                !badge ? <div style={{ height: '18rem' }} className="banner ">
                    <h1 className="p-4">Global Sports Hub</h1>
                </div>
                    : <div style={{ height: '18rem' }} className="banner ">
                        <img src={leagueBadge} alt="" style={style} />
                    </div>
            }
        </>
    );
};

export default Header;

