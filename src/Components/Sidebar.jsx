import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Global";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { popularAnime } = useGlobalContext();

  const sortedAnime = popularAnime?.sort((a, b) => {
    //sort anime based on the score
    return b.score - a.score;
  });

  return (
    <SidebarStyled>
      <h3>Top 5 Popular</h3>
      <div className="anime">
        {sortedAnime?.slice(0, 5)?.map((anime) => {
          return (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt="" />
              <h5>{anime.title}</h5>
            </Link>
          );
        })}
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  border-top: 5px solid #e5e7eb;
  padding-right: 5rem;
  padding-left: 2rem;
  padding-top: 2rem;

  .anime {
    display: flex;
    flex-direction: column;
    width: 150px;
    img {
      width: 100%;
      border-radius: 5px;
      border: 5px solid #e5e7eb;
    }
    a {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: .4rem;
      color: #eb5757;
      h5{
        font-size: 1rem;
      }
    }
  }
`;

export default Sidebar;
