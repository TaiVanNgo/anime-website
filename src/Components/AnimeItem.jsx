import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimeItem() {
  const { id } = useParams();

  //state
  const [anime, setAnime] = useState({});
  const [characers, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  //destructure Anime
  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  //Get anime based on id
  const getAnime = async (animeID) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}`);
    const data = await response.json();
    setAnime(data.data);
    console.log(data.data);
  };

  //get Characters
  const getCharacters = async (animeID) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${animeID}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="Anime Cover" />
          </div>
          <div className="anime-details">
            <p>
              <span>Aired: </span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span>Rating: </span>
              <span>{rating}</span>
            </p>
            <p>
              <span>Rank: </span>
              <span>{rank}</span>
            </p>
            <p>
              <span>Score: </span>
              <span>{score}</span>
            </p>
            <p>
              <span>Scored By: </span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span>Popularity: </span>
              <span>{popularity}</span>
            </p>
            <p>
              <span>Status: </span>
              <span>{status}</span>
            </p>

            <p>
              <span>Source: </span>
              <span>{source}</span>
            </p>
            <p>
              <span>Season: </span>
              <span>{season}</span>
            </p>
            <p>
              <span>Duration: </span>
              <span>{duration}</span>
            </p>
          </div>
        </div>
        <p className="description">
          {/* If showMore is true --> display whole text */}
          {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Show less" : "Read more"}
          </button>
        </p>
      </div>
      <h3 className="title">Trailer</h3>
      <div className="trailer-container">
        {trailer?.embed_url && (
          <iframe
            src={trailer?.embed_url}
            title={title}
            width="800"
            height="450"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default AnimeItem;
