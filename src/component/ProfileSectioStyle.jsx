import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  isolation: isolate;

  width: 1152px;
  height: 142px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  #imagetag {
    width: 88px;
    height: 88px;
    border-radius: 50%;
  }
`;

export const NameTag = styled.span`
  width: 1152px;
  height: 30px;

  /* Text xl/Bold */

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/900 */

  color: #101828;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`;
