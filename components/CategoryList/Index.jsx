import { useState, useEffect } from "react";

import styled from "styled-components";

import CategoryElement from "./CategoryElement";
import CategoryDetails from "./CategoryDetails";

const DUMMY_DATA = {
  stębnówki: [
    "z pojedynczym transportem",
    "z podwójny transportem",
    "z potrójny transportem",
    "2-igłowe",
  ],
};

const CategoryList = () => {
  const [detailsContent, setDetailsContent] = useState(DUMMY_DATA);

  const [isOverElement, setIsOverElement] = useState(false);
  const [isOverDetails, setIsOverDetails] = useState(false);

  const [isOver, setIsOver] = useState(false);

  const hoverElementHandler = () => setIsOverElement(!isOverElement);

  const hoverDetailsHandler = () => setIsOverDetails(!isOverDetails);

  useEffect(() => {
    if (isOverElement || isOverDetails) {
      setIsOver(true);
    } else {
      setIsOver(false);
    }
  }, [isOverDetails, isOverElement]);

  return (
    <CategoryContainerStyled>
      <div className="CategoryList">
        <ul>
          <CategoryElement
            imgSrc="https://img.icons8.com/dotty/80/7E7E80/cottage.png"
            title="Maszyny Domowe"
            href="maszyny-domowe"
            hoverHandler={hoverElementHandler}
          />
          <CategoryElement
            imgSrc="https://img.icons8.com/dotty/80/7E7E80/factory.png"
            title="Maczyny Przemysłowe"
            href="maszyny-przemyslowe"
            hoverHandler={hoverElementHandler}
          />
          <CategoryElement
            imgSrc="https://img.icons8.com/dotty/80/7E7E80/sewing-machine.png"
            title="Hafciarki"
            href="hafciarki"
            hoverHandler={hoverElementHandler}
          />
          <CategoryElement
            imgSrc="https://img.icons8.com/dotty/80/7E7E80/ironing.png"
            title="Prasowanie"
            href="prasowanie"
            hoverHandler={hoverElementHandler}
          />
          <CategoryElement
            imgSrc="https://img.icons8.com/dotty/80/7E7E80/pin-cushion.png"
            title="Akcesoria"
            href="akcesoria"
            hoverHandler={hoverElementHandler}
          />
          <CategoryElement
            imgSrc="https://img.icons8.com/dotty/80/7E7E80/sewing-button.png"
            title="Części Zamienne"
            href="czesci-zamienne"
            hoverHandler={hoverElementHandler}
          />
          <CategoryElement
            imgSrc="https://img.icons8.com/dotty/80/7E7E80/discount.png"
            title="Promocje"
            href="promocje"
            hoverHandler={hoverElementHandler}
          />
        </ul>
      </div>
      <CategoryDetails
        detailsContent={detailsContent}
        hoverHandler={hoverDetailsHandler}
        isOver={isOver}
      />
    </CategoryContainerStyled>
  );
};

const CategoryContainerStyled = styled.div`
  .CategoryList {
    position: fixed;
    width: 100%;
    min-height: 150px;
    background: white;
    box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);
    padding-top: 90px;
    z-index: 90;
  }

  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 50px;
    z-index: 90;
  }
`;

export default CategoryList;
