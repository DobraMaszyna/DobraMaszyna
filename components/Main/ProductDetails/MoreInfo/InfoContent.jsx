import styled from "styled-components";

const InfoContent = ({ content }) => {
  return (
    <InfoContentStyled>
      <img src="/img/test.jpg" alt="" />
    </InfoContentStyled>
  );
};

const InfoContentStyled = styled.div`
  width: 95%;
  margin: auto;
`;

export default InfoContent;
