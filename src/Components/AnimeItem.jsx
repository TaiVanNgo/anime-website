import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

function AnimeItem() {
  const { id } = useParams();

  //state
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);
  //This use to chagne the title to english or japanese
  const [japaneseTitle, setJapaneseTitle] = useState(false);
  //destructure Anime
  const {
    title,
    title_japanese,
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
  };

  //get Characters
  const getCharacters = async (animeID) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${animeID}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <AnimeItemStyled>
      <div className="back">
        <Link to={`/`}>
          <IoMdArrowBack /> Back To Home
        </Link>
      </div>
      <h1
        onClick={() => {
          setJapaneseTitle(!japaneseTitle);
        }}
      >
        {japaneseTitle ? title_japanese : title}
      </h1>
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
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title={title}
            width="800"
            height="450"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <h3>No Trailer Available</h3>
        )}
      </div>
      <h3 className="title">Characters</h3>
      <div className="characters">
        {characters?.map((character, index) => {
          // const {role, character?.mal_id, character?.name, character?.images.jpg.image_url} = character;
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link to={`/anime/${id}/character/${mal_id}`} key={index}>
              <div className="character">
                <img src={images?.jpg.image_url} alt="" />
                <h4>{name}</h4>
                <p>{role}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </AnimeItemStyled>
  );
}
const AnimeItemStyled = styled.div`
  padding: 3rem 10rem;

  background-color: #ededed;

  .back {
    position: absolute;
    top: 2rem;
    left: 2rem;
    a {
      /* this is the <Link> inside the div*/
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-weight: 600;
      text-decoration: none;
      color: #eb5757;
    }
  }

  h1 {
    display: inline-block;
    font-size: 3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    color: #8b0000;
    transition: all 0.4s ease-in-out;

    &:hover {
      /* transform: skew(-3deg); */
      transform: scale(1.02); /* Example transformation on hover */
    }
  }

  .title {
    display: inline-block;
    margin: 3rem 0;
    font-size: 2rem;
    cursor: pointer;
    color: #8b0000;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: skew(-3deg);
    }
  }

  .description {
    margin-top: 2rem;
    color: #6c7983;
    line-height: 1.7rem;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #8b0000; /* Dark red */
      font-weight: 600;
    }
  }

  .trailer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      outline: none;
      border: 5px solid #e5e7eb;
      padding: 1.5rem;
      border-radius: 10px;
      background-color: #fff;
    }
  }

  .details {
    background-color: white;
    border-radius: 20px;
    padding: 2rem;
    border: 5px solid #e5e7eb;

    .detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      img {
        border-radius: 7px;
      }
    }

    .anime-details {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        display: flex;
        gap: 1rem;
      }

      p span:first-child {
        font-weight: 600;
        color: #454e56;
      }
    }
  }

  .characters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 20px;
    border: 5px solid #e5e7eb;
    .character {
      padding: 0.4rem 0.6rem;
      border-radius: 7px;
      background-color: #ededed;
      transition: all 0.4s ease-in-out;

      img {
        width: 100%;
      }

      h4 {
        padding: 0.5rem 0;
        color: #454e56;
      }

      p {
        color: #27ae60;
      }
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;

export default AnimeItem;
