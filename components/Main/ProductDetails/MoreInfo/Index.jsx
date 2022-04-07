import styled from "styled-components";
import InfoNavbar from "./InfoNavbar";
import InfoContent from "./InfoContent";

const MoreInfo = () => {
  return (
    <MoreInfoStyled>
      <InfoNavbar />
      <InfoContent />
    </MoreInfoStyled>
  );
};

const MoreInfoStyled = styled.div``;

export default MoreInfo;
