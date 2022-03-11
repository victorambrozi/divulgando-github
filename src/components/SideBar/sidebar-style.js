import styled from "styled-components";

const SideBarStyle = styled.div`
  border-radius: 2.5rem;
  background-color: #1d204b;
  color: #fff;

  overflow: hidden;
`;

const CardAvatar = styled.div`
  width: 100%;

  .card {
    padding: 3.2rem;
  }
  .card-top {
    background: #5746ea;
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;

    .avatar {
      width: 11.5rem;
      height: 11.5rem;

      border: 0.4rem solid #fff;
      border-radius: 50%;
    }

    .content {
      margin: 6.4rem 0;

      > span {
        font-size: 1.8rem;
        color: rgba(255, 255, 255, 62%);
      }

      h2 {
        font-weight: 400;
        font-size: 3.6rem;
        color: rgba(255, 255, 255, 80%);
      }

    }
  }

  .card-bottom {
    margin: 6.4rem 0;

    ul {
      color: rgba(255, 255, 255, 80%);

      > li {
        display: flex;
        align-items: center;
        font-size: 2rem;

        span {
          margin-left: 1.5rem;
        }
      }

      li + li {
        margin-top: 1.6rem;
      }
    }
  }
`;

export { SideBarStyle, CardAvatar };
