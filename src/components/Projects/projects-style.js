import styled from "styled-components";

const ProjectsStyle = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(28.2rem, 1fr));
  grid-template-rows: repeat(2, 30rem) 5rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;

  /* overflow: hidden; */

  .pagination {
    grid-column: span 3;
    justify-self: end;

    width: 14.3rem;
    padding: 1.2rem;

    border-radius: 1rem;
    background: #5746ea;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .pagination-previous {
      display: flex;
      flex: 1;

      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }

    .pagination-all {
      cursor: pointer;
      transition: .3s;

      &:hover {
        background: rgba(255,255,255, 15%);
      }

    }

    .pagination-next {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;

      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      &::before {
        content: "";
        display: block;
        height: 3rem;
        width: 0.2rem;
        background: #fff;
      }
    }
  }
`;

export { ProjectsStyle };
