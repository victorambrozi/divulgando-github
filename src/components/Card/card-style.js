import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  max-width: 45rem;
  border-radius: 2.5rem;

  align-self: end;
  
  display: flex;
  flex-direction: column;
  position: relative;

  transition: .3s;
 
  .github-icon {
    height: 10rem;
    width: 100%;
    padding-right: 3.2rem;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    background: ${(props) => props.background};

    position: absolute;
    top:${props => props.topBar ? '-60px' : '-40px'};
    z-index: -1;

    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    transition: .4s;
  }
`;

const CardContent = styled.div`
  padding: 3.2rem;
  width: 100%;

  background: #1d204b;
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  z-index: 1;

  h2 {
    color: rgba(255, 255, 255, 80%);
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    width: 100%;
    word-break: break-words;
    margin: 3.2rem 0;
    color: rgba(255, 255, 255, 80%);
    font-size: 1.8rem;
  }

  .github-link {
    > a {
      width: 14.5rem;
      padding: 1.6rem;

      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 300;
      color: rgba(255, 255, 255, 80%);

      background: #5746ea;
      border-radius: 1rem;

      transition: 0.4s;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;

export { CardStyle, CardContent };
