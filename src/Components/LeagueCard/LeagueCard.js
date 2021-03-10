import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import maleImg from '../Images/male.JPG'
import femaleImg from '../Images/female.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faFutbol, faMars, faVenus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './leagueCard.css'

const LeagueCard = ({ leagueId, flag }) => {
  const [leagueInfo, setLeagueInfo] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagueInfo(data.leagues[0]))
  }, [leagueId])

  const { strLeague, strBadge, strSport, intFormedYear, strCountry, strDescriptionEN, strGender, strFacebook, strTwitter, strYoutube} = leagueInfo;


  const style = {
    height: '150px',
    width: '80%',
    margin: 'auto',
    marginTop: '15px'
  }

  return (
    <>
      { flag ?
        <div>
          <div className="d-flex justify-content-around rounded align-items-center flex-wrap" style={{ backgroundColor: '#242e40', maxWidth: '800px', margin: 'auto' }}>
          <div className="mx-5 my-3">
              <h4>{strLeague}</h4>
              <h5><FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</h5>
              <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
              <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
              <h5><FontAwesomeIcon icon={(strGender === 'male' || strGender === 'Male') ? faMars : faVenus} /> Gender: {strGender}</h5>
            </div>
            <div className="mr-3 my-3 ml-3 rounded">
              <img src={(strGender === 'female' || strGender === 'Female') ? maleImg : femaleImg} alt=""
                style={{ height: "13rem" }}
              />
            </div>
           
          </div>
          <div className="mt-5 mb-5 text-secondary">
            <p style={{ fontSize: '20px' }}>{strDescriptionEN}</p>
            <Link to='/home'>
              <button className="btn btn-danger">Back <FontAwesomeIcon icon={faArrowCircleRight} /> </button>
            </Link>
          </div>
          <div>
            <a rel="noreferrer" href={`https://${strFacebook}`} target='_blank' class="fa fa-facebook"><span></span></a>
            <a rel="noreferrer" href={`https://${strTwitter}`} target='_blank' class="fa fa-twitter"><span></span></a>
            <a rel="noreferrer" href={`https://${strYoutube}`} target='_blank' class="fa fa-youtube"><span></span></a>
          </div>

        </div>


        : <div className="container">
          <Card bg='dark' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={strBadge} style={style} />
            <Card.Body>
              <Card.Title>{strLeague}</Card.Title>
                Sports type: {strSport}
              <Card.Text>

              </Card.Text>

              <Link to={`/${leagueId}`}>
                <Button variant="danger">Explore more <FontAwesomeIcon icon={faArrowCircleRight} /> </Button>
              </Link>

            </Card.Body>
          </Card>
        </div>}
    </>
  );
};

export default LeagueCard;