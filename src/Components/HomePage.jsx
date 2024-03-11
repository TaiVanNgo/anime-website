import React, { useState } from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../Context/Global";
import styled from "styled-components";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import { HiOutlineMenu } from "react-icons/hi";

const HomePage = () => {
  const {
    handleSubmit,
    search,
    isSearch,
    searchResults,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = useState("popular");
  const [menuOpen, setMenuOpen] = useState(false);

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <HomepageStyled>
      <header>
        <div className="logo">
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className="search-container">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              <i className="fas fa-fire"></i>
              Popular
            </button>
          </div>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <HiOutlineMenu
            className="icon"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
        <div className="search-length">
          {isSearch && <h4>Found {searchResults.length} Anime</h4>}
        </div>
      </header>
      {switchComponent()}
    </HomepageStyled>
  );
};

const HomepageStyled = styled.div`
  background-color: #ededed;
  header {
    padding: 1rem 1rem;
    width: 60%;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .icon {
        display: none;
        width: 80px;
        height: 32px;
        cursor: pointer;
      }

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.5rem;
        outline: none;
        border-radius: 30px;
        font-size: 1.2rem;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        font-family: inherit;
        border: 5px solid #e5e7eb;
      }

      form {
        position: relative;
        width: 100%;

        .input-control {
          position: relative;
          transition: all 0.4s ease-in-out;
        }

        .input-control input {
          width: 100%;
          padding: 0.7rem 1rem;
          border: none;
          outline: none;
          border-radius: 30px;
          font-size: 1.2rem;
          background-color: #fff;
          border: 5px solid #e5e7eb;
          transition: all 0.4s ease-in-out;
        }

        .input-control button {
          position: absolute;
          right: 0%;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      @media screen and (max-width: 768px) {
        .icon {
          display: flex;
        }
      }
    }
    .search-length {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
    }
    @media screen and (max-width: 1000px) {
      .search-container button {
        gap: 0.3rem;
        padding: 0.5rem 1rem;
      }
    }
    @media screen and (max-width: 768px) {
      .filter-btn button{
        display: none;
      }

      .input-control button {
        display: none;
      }

      .search-container {
        justify-content: flex-end; // align items to the right
      }

      .search-container .input-control input {
        width: 80%; // increase the width of the input
        margin-left: 10px; // add some space between the input and the icon
      }
    }
  }
  @media screen and (max-width: 768px) {
    header {
      width: 100%;
    }
  }
`;

export default HomePage;
