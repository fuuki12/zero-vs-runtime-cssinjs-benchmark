import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 24px;
  margin: auto;
  max-width: 24rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledComponent = () => {
  return (
    <StyledDiv>
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: "500" }}>
          Styled Component
        </div>
        {[...Array(100000)].map((_, i) => (
          <p style={{ color: "#71717A" }} key={i}>
            You are using Styled Components for styling this component.
          </p>
        ))}
      </div>
    </StyledDiv>
  );
};
