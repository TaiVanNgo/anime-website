import React from "react";
import { useGlobalContext } from "../Context/Global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Airing({ rendered }) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "airing") {
      return airingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <h4>{anime.title}</h4>
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <h4>{anime.title}</h4>
          </Link>
        );
      });
    }
  };

  return (
    <AiringStyled>
      <div className="airing-anime">{conditionalRender()}</div>
      <Sidebar />
    </AiringStyled>
  );
}

const AiringStyled = styled.div`
  display: flex;
  .airing-anime {
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    padding-right: 0rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;

    h4 {
      font-size: 1rem;
    }
    a {
      height: 500px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
    }

    a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export default Airing;
