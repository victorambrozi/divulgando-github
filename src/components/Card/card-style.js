import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  max-width: 45rem;
  border-radius: 2.5rem;
  background: ${(props) => props.background};

  .github-icon {
    margin-right: 3.2rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

const CardContent = styled.div`
  padding: 3.2rem;
  width: 100%;
  min-height: 23.5rem;

  background: #1d204b;
  border-radius: 1.5rem;

  h2 {
    color: rgba(255, 255, 255, 80%);
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    margin: 3.2rem 0;
    color: rgba(255, 255, 255, 80%);
    font-size: 1.8rem;
  }

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
`;

export { CardStyle, CardContent };
