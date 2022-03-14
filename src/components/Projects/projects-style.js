import { MdSkipPrevious } from "react-icons/md";
import styled from "styled-components";

const ProjectsStyle = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(28.2rem, 1fr));
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
    }

    .pagination-all {
      cursor: pointer;
    }

    .pagination-next {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;

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
