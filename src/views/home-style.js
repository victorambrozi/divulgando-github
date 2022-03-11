import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "sidebar card card card"
    "sidebar card card card"
    "sidebar button  .    .";
    
  /* justify-content: space-between; */
  /* align-content:space-between; */
  /* align-items: center; */
  gap: 2rem;
`;
