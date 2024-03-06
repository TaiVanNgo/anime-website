import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Global";
import { IoMdArrowBack } from "react-icons/io";

const CharacterGallery = () => {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { characterID, id } = useParams();

  //state
  const [index, setIndex] = useState(0);

  const handleClickImage = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    getAnimePictures(characterID);
  }, [characterID]);

  return (
    <CharacterGalleryStyled>
      <div className="back">
        <Link to={`/anime/${id}`}>
          <IoMdArrowBack />
          Back To Previous Page
        </Link>
      </div>
      <div className="big-image">
        <img src={pictures[index]?.jpg.image_url} alt="" />
      </div>
      <div className="small-images">
        {pictures?.map((pictureItem, i) => {
          return (
            <div
              className="image-con"
              key={i}
              onClick={() => {
                handleClickImage(i);
              }}
            >
              <img
                src={pictureItem?.jpg.image_url}
                style={{
                  border:
                    i === index ? "3px solid #27ae60" : "3px solid #e5e7eb",
                  filter: i === index ? "grayscale(0)" : "grayscale(60%)",
                  transition: "all .3s ease-in-out",
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </CharacterGalleryStyled>
  );
};

const CharacterGalleryStyled = styled.div`
  background-color: #ededed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .big-image {
    display: inline-block;
    padding: 1.5rem;
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 7px;
    border: 5px solid #e5e7eb;
    position: relative;
    img {
      width: 300px;
    }
  }

  .small-images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 80%;
    padding: 2rem;
    border-radius: 7px;
    background-color: #fff;
    border: 5px solid #e5e7eb;

    img {
      width: 6rem;
      height: 8rem;
      object-fit: cover;
      cursor: pointer;
      border-radius: 5px;
    }
  }
`;

export default CharacterGallery;
