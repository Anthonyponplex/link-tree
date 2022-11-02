import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 64px;
  width: 80%;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  #shareButton {
    border-radius: 100%;
    height: 40px;
    width: 40px;
    position: absolute;
    right: 20%;
    /* left: 0; */
    top: 3rem;
    cursor: pointer;
    @media (max-width: 768px) {
      right: 10%;
    }
  }
  #mobileButton {
    visibility: hidden;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    position: absolute;
    right: 20%;
    /* left: 0; */
    top: 3rem;
    cursor: pointer;
  }
  @media (max-width: 376px) {
    #mobileButton {
      visibility: visible;
    }
    #shareButton {
      visibility: hidden;
    }
  }
`;
