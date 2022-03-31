import styled from "styled-components";

const Availability = ({ title, icon }) => {
  return (
    <AvailabilityStyled>
      {title}
      <img src={icon} className="icon" />
    </AvailabilityStyled>
  );
};

const AvailabilityStyled = styled.div`
  color: #2ecc71;
  display: flex;
  justify-content: flex-end;

  .icon {
    width: 24px;
  }
`;

export default Availability;
